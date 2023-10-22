import { ApiProperty } from '@nestjs/swagger'
import {IsString, IsNotEmpty} from 'class-validator'

export class PostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string

  categories: string[]
}

