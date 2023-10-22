import {Injectable, NotFoundException} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {UserDocument, User} from './user.schema'
import {CreateUserDto} from './dto/create-user.dto'
import {CoursesService} from '../courses/courses.service'
import {InjectConnection} from '@nestjs/mongoose'
import {Model, Connection} from 'mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly coursesService: CoursesService,
    @InjectConnection() private readonly connection: Connection
  ) {}

  async getByEmail(email: string) {
    const user = await this.userModel.findOne({email}).populate({
      path: 'courses',
      populate: {
        path: 'categories',
      },
    })

    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  async getById(id: string) {
    const user = await this.userModel.findById(id).populate({
      path: 'courses',
      populate: {
        path: 'categories',
      },
    })

    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  async create(userData: CreateUserDto) {
    const createdUser = new this.userModel(userData)
    await createdUser.populate({
      path: 'courses',
      populate: {
        path: 'categories',
      },
    })
    // .execPopulate();
    return createdUser.save()
  }

  async delete(userId: string) {
    const session = await this.connection.startSession()

    session.startTransaction()
    try {
      const user = await this.userModel
        .findByIdAndDelete(userId)
        .populate('courses')
        .session(session)

      if (!user) {
        throw new NotFoundException()
      }
      const courses = user.courses

      await this.coursesService.deleteMany(
        courses.map((course) => course._id.toString()),
        session
      )
      await session.commitTransaction()
    } catch (error) {
      await session.abortTransaction()
      throw error
    } finally {
      session.endSession()
    }
  }
}
