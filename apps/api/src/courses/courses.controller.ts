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
} from '@nestjs/common'
import {CoursesService} from './courses.service'
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import {RequestWithUser} from '../auth/request-with-user.interface'
import {ParamsWithId, PaginationParams} from '../utilities'
import {UserRole} from '@queroser.dev/shared/util-model'
import {CourseDto, UpdateCourseDto} from './dto'
import {Roles} from '../shared/decorators'
import {ApiCookieAuth, ApiTags} from '@nestjs/swagger'
import { RolesGuard } from '../shared/guards'

@ApiCookieAuth()
@ApiTags('courses')
@Controller('courses')
// @UseInterceptors(MongooseClassSerializerInterceptor(Course))
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async getAllCourses(
    @Query() {skip, limit, startId}: PaginationParams,
    @Query('searchQuery') searchQuery = ''
  ) {
    return this.coursesService.findAll(skip, limit, startId, searchQuery)
  }

  @Get(':id')
  async getCourse(@Param() {id}: ParamsWithId) {
    return this.coursesService.findOne(id)
  }

  @Post()
  @Roles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createCourse(@Body() course: CourseDto, @Req() req: RequestWithUser) {
    return this.coursesService.create(course, req.user)
  }

  @Delete(':id')
  @Roles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async deleteCourse(@Param() {id}: ParamsWithId) {
    return this.coursesService.delete(id)
  }

  @Put(':id')
  @Roles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateCourse(
    @Param() {id}: ParamsWithId,
    @Body() course: UpdateCourseDto
  ) {
    return this.coursesService.update(id, course)
  }
}
