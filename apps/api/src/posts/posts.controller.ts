import {
  Get,
  Put,
  Req,
  Body,
  Post,
  Query,
  Param,
  Delete,
  UseGuards,
  Controller,
  UseInterceptors,
} from '@nestjs/common'
import {PostsService} from './posts.service'
import {ParamsWithId} from '../utilities/params-with-id'
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import {RequestWithUser} from '../auth/request-with-user.interface'
import {MongooseClassSerializerInterceptor} from '../utilities/mongoose-class-serializer.interceptor'
import {Post as PostModel} from './post.schema'
import {PaginationParams} from '../utilities/pagination-params'
import {UpdatePostDto} from './dto/update-post.dto'
import {PostDto} from './dto/post.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('posts')
@Controller('posts')
// @UseInterceptors(MongooseClassSerializerInterceptor(PostModel))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(
    @Query() {skip, limit, startId}: PaginationParams,
    @Query('searchQuery') searchQuery: string
  ) {
    return this.postsService.findAll(skip, limit, startId, searchQuery)
  }

  @Get(':id')
  async getPost(@Param() {id}: ParamsWithId) {
    return this.postsService.findOne(id)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createPost(@Body() post: PostDto, @Req() req: RequestWithUser) {
    return this.postsService.create(post, req.user)
  }

  @Delete(':id')
  async deletePost(@Param() {id}: ParamsWithId) {
    return this.postsService.delete(id)
  }

  @Put(':id')
  async updatePost(@Param() {id}: ParamsWithId, @Body() post: UpdatePostDto) {
    return this.postsService.update(id, post)
  }
}
