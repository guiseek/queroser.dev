import {
  Get,
  Req,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseGuards,
  Controller,
  UseInterceptors,
} from '@nestjs/common'
import {SeriesService} from './series.service'
import {ParamsWithId} from '../utilities/params-with-id'
import {SeriesDto} from './dto/series.dto'
import {JwtAuthGuard} from '../auth/jwt-auth.guard'
import {RequestWithUser} from '../auth/request-with-user.interface'
import {MongooseClassSerializerInterceptor} from '../utilities/mongoose-class-serializer.interceptor'
import {Series} from './series.schema'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('series')
@Controller('series')
// @UseInterceptors(MongooseClassSerializerInterceptor(Series))
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getAllSeries() {
    return this.seriesService.findAll()
  }

  @Get(':id')
  async getSeries(@Param() {id}: ParamsWithId) {
    return this.seriesService.findOne(id)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createSeries(@Body() series: SeriesDto, @Req() req: RequestWithUser) {
    return this.seriesService.create(series, req.user)
  }

  @Delete(':id')
  async deleteSeries(@Param() {id}: ParamsWithId) {
    return this.seriesService.delete(id)
  }

  @Put(':id')
  async updateSeries(@Param() {id}: ParamsWithId, @Body() series: SeriesDto) {
    return this.seriesService.update(id, series)
  }
}
