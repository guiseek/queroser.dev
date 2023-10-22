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
import {CoursesService} from './courses.service'
import {ParamsWithId} from '../utilities/params-with-id'
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import {RequestWithUser} from '../auth/request-with-user.interface'
import {MongooseClassSerializerInterceptor} from '../utilities/mongoose-class-serializer.interceptor'
import {PaginationParams} from '../utilities/pagination-params'
import {UpdateCourseDto} from './dto/update-course.dto'
import {CourseDto} from './dto/course.dto'
import {Course} from './course.schema'
import {ApiTags} from '@nestjs/swagger'

@ApiTags('courses')
@Controller('courses')
// @UseInterceptors(MongooseClassSerializerInterceptor(Course))
export class CoursesController {
  constructor(private readonly postsService: CoursesService) {}

  @Get()
  async getAllPosts(
    @Query() {skip, limit, startId}: PaginationParams,
    @Query('searchQuery') searchQuery = ''
  ) {
    return this.postsService.findAll(skip, limit, startId, searchQuery)
  }

  @Get(':id')
  async getPost(@Param() {id}: ParamsWithId) {
    return this.postsService.findOne(id)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createPost(@Body() post: CourseDto, @Req() req: RequestWithUser) {
    return this.postsService.create(post, req.user)
  }

  @Delete(':id')
  async deletePost(@Param() {id}: ParamsWithId) {
    return this.postsService.delete(id)
  }

  @Put(':id')
  async updatePost(@Param() {id}: ParamsWithId, @Body() post: UpdateCourseDto) {
    return this.postsService.update(id, post)
  }
}
