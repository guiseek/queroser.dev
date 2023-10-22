import {IsString, IsNotEmpty, IsOptional} from 'class-validator'
import {Exclude, Type} from 'class-transformer'
import {Category} from '../../categories/category.schema'
import {Series} from '../../series/series.schema'
import {UserDto} from '../../users/dto/user.dto'
import {ApiProperty} from '@nestjs/swagger'

export class UpdateCourseDto {
  @ApiProperty()
  @IsOptional()
  @Exclude()
  _id: string

  @ApiProperty({example: 'Estilos em cascata para web'})
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({example: '...'})
  @IsString()
  @IsNotEmpty()
  intro: string

  @ApiProperty({
    example:
      'https://raw.githubusercontent.com/guiseek/dev-logos.svg/main/html.svg',
  })
  @IsString()
  @IsOptional()
  icon?: string

  @Type(() => Category)
  categories: Category[]

  @Type(() => UserDto)
  @IsNotEmpty()
  author: UserDto

  @Type(() => Series)
  @IsOptional()
  series?: Series
}
