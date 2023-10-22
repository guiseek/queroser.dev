import {IsEmail, IsString, IsNotEmpty, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class LogInDto {
  @IsEmail()
  @ApiProperty({example: 'nome@email.dev'})
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty()
  password: string
}

export default LogInDto
