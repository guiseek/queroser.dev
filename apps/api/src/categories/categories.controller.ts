import {
  Get,
  Post,
  Put,
  Req,
  Body,
  Param,
  Delete,
  UseGuards,
  Controller,
  UseInterceptors,
} from '@nestjs/common'
import {MongooseClassSerializerInterceptor} from '../utilities'
import {RequestWithUser} from '../auth/request-with-user.interface'
import {ParamsWithId} from '../utilities/params-with-id'
import {CategoriesService} from './categories.service'
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import {CategoryDto} from './dto/category.dto'
import {Category} from './category.schema'
import {ApiTags} from '@nestjs/swagger'

@ApiTags('categories')
@Controller('categories')
@UseInterceptors(MongooseClassSerializerInterceptor(Category))
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
  @UseGuards(JwtAuthGuard)
  async createCategory(
    @Body() category: CategoryDto,
    @Req() req: RequestWithUser
  ) {
    return this.categoriesService.create(category, req.user)
  }

  @Delete(':id')
  async deleteCategory(@Param() {id}: ParamsWithId) {
    return this.categoriesService.delete(id)
  }

  @Put(':id')
  async updateCategory(
    @Param() {id}: ParamsWithId,
    @Body() category: CategoryDto
  ) {
    return this.categoriesService.update(id, category)
  }
}
