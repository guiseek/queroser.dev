import {ApiProperty} from '@nestjs/swagger'
import {IsString, IsNotEmpty, IsOptional} from 'class-validator'

export class CourseDto {
  @ApiProperty({example: 'Fundamentos CSS'})
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({
    example:
      'Tecnologia de estilo para HTML, permitindo o design e a formatação de páginas web com seletores, propriedades e valores',
  })
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

  categories: string[]
}
