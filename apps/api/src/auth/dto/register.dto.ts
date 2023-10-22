import {IsEmail, IsString, IsNotEmpty, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class RegisterDto {
  @ApiProperty({example: 'email@guiseek.dev'})
  @IsEmail()
  email: string

  @ApiProperty({example: 'Gui'})
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string

  @ApiProperty({example: 'Seek'})
  @IsString()
  @IsNotEmpty()
  lastName: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string
}
