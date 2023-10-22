import {IsString, IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'HTML' })
  name: string
}

