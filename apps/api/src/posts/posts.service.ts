import {FilterQuery, Model, ClientSession} from 'mongoose'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Post, PostDocument} from './post.schema'
import {NotFoundException} from '@nestjs/common'
import {UpdatePostDto} from './dto/update-post.dto'
import {UserDto} from '../users/dto/user.dto'
import {PostDto} from './dto/post.dto'

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async findAll(
    documentsToSkip = 0,
    limitOfDocuments?: number,
    startId?: string,
    searchQuery?: string
  ) {
    const filters: FilterQuery<PostDocument> = startId
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

    const findQuery = this.postModel
      .find(filters)
      .sort({_id: 1})
      .skip(documentsToSkip)
      .populate('author')
      .populate('categories')
      .populate('series')

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments)
    }

    const results = await findQuery
    const count = await this.postModel.count()

    return {results, count}
  }

  async findOne(id: string) {
    const post = await this.postModel
      .findById(id)
      .populate('author')
      .populate('categories')
      .populate('series')
    if (!post) {
      throw new NotFoundException()
    }
    return post
  }

  async create(postData: PostDto, author: UserDto) {
    const createdPost = new this.postModel({
      ...postData,
      author,
    })
    await createdPost.populate('categories', 'series')
    return createdPost.save()
  }

  async update(id: string, postData: UpdatePostDto) {
    const post = await this.postModel
      .findOneAndReplace({_id: id}, postData, {new: true})
      .populate('author')
      .populate('categories')
      .populate('series')
    if (!post) {
      throw new NotFoundException()
    }
    return post
  }

  async delete(postId: string) {
    const result = await this.postModel.findByIdAndDelete(postId)
    if (!result) {
      throw new NotFoundException()
    }
  }

  async deleteMany(ids: string[], session: ClientSession | null = null) {
    return this.postModel.deleteMany({_id: ids}).session(session)
  }
}
