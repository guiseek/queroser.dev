import {
  Get,
  Put,
  Req,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Controller,
  // UseInterceptors,
} from '@nestjs/common'
// import {MongooseClassSerializerInterceptor} from '../utilities'
import {RequestWithUser} from '../auth/request-with-user.interface'
import {ParamsWithId} from '../utilities/params-with-id'
import {CategoriesService} from './categories.service'
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import {CategoryDto} from './dto/category.dto'
// import {Category} from './category.schema'
import {ApiTags} from '@nestjs/swagger'
import {Roles} from '../shared/decorators'
import {UserRole} from '@queroser.dev/shared/util-model'
import {RolesGuard} from '../shared/guards'

@ApiTags('categories')
@Controller('categories')
// @UseInterceptors(MongooseClassSerializerInterceptor(Category))
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    return this.categoriesService.findAll()
  }

  @Get(':id')
  async getCategory(@Param() {id}: ParamsWithId) {
    return this.categoriesService.findOne(id)
  }

  @Post()
  @Roles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createCategory(
    @Body() category: CategoryDto,
    @Req() req: RequestWithUser
  ) {
    return this.categoriesService.create(category, req.user)
  }

  @Put(':id')
  @Roles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateCategory(
    @Param() {id}: ParamsWithId,
    @Body() category: CategoryDto
  ) {
    return this.categoriesService.update(id, category)
  }

  @Delete(':id')
  @Roles(UserRole.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async deleteCategory(@Param() {id}: ParamsWithId) {
    return this.categoriesService.delete(id)
  }
}
