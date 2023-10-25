import {FilterQuery, Model, ClientSession} from 'mongoose'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {NotFoundException} from '@nestjs/common'
import {Course, CourseDocument} from './course.schema'
import {UpdateCourseDto} from './dto/update-course.dto'
import {UserDto} from '../users/dto/user.dto'
import {CourseDto} from './dto/course.dto'

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: Model<CourseDocument>
  ) {}

  async findAll(
    documentsToSkip = 0,
    limitOfDocuments?: number,
    startId?: string,
    searchQuery?: string
  ) {
    const filters: FilterQuery<CourseDocument> = startId
      ? {
          _id: {
            $gt: startId,
          },
        }
      : {}

    if (searchQuery) {
      filters.$text = {
        $search: searchQuery,
      }
    }

    const findQuery = this.courseModel
      .find(filters)
      .sort({_id: 1})
      .skip(documentsToSkip)
      // .populate('author')
      .populate('categories')
    // .populate('steps')

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments)
    }

    const results = await findQuery
    const count = await this.courseModel.count()

    return {results, count}
  }

  async findOne(id: string) {
    const course = await this.courseModel
      .findById(id)
      // .populate('author')
      .populate('categories')
    // .populate('series')
    if (!course) {
      throw new NotFoundException()
    }
    return course
  }

  async create(courseData: CourseDto, author: UserDto) {
    const createdPost = new this.courseModel({
      ...courseData,
      author,
    })
    // await createdPost
    // .populate('categories')
    return createdPost.save()
  }

  async update(id: string, courseData: UpdateCourseDto) {
    const course = await this.courseModel
      .findOneAndReplace({_id: id}, courseData, {new: true})
      .populate('author')
      .populate('categories')
    // .populate('series')
    if (!course) {
      throw new NotFoundException()
    }
    return course
  }

  async delete(courseId: string) {
    const result = await this.courseModel.findByIdAndDelete(courseId)
    if (!result) {
      throw new NotFoundException()
    }
  }

  async deleteMany(ids: string[], session: ClientSession | null = null) {
    return this.courseModel.deleteMany({_id: ids}).session(session)
  }
}
