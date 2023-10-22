import {IsString, IsNotEmpty, IsOptional} from 'class-validator'
import {Exclude, Type} from 'class-transformer'
import {Category} from '../../categories/category.schema'
import {SeriesDto} from '../../series/dto/series.dto'
import {Series} from '../../series/series.schema'
import {UserDto} from '../../users/dto/user.dto'
import {ApiProperty} from '@nestjs/swagger'

export class UpdatePostDto {
  @IsOptional()
  @Exclude()
  _id: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string

  @ApiProperty()
  @Type(() => Category)
  categories: Category[]

  @ApiProperty({
    type: UserDto,
  })
  @Type(() => UserDto)
  @IsNotEmpty()
  author: UserDto

  @ApiProperty({
    required: false,
    type: SeriesDto,
  })
  @Type(() => Series)
  @IsOptional()
  series?: Series
}
