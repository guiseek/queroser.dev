import {IsEmail, IsString, IsNotEmpty, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class RegisterDto {
  @IsEmail()
  @ApiProperty({example: 'nome@email.dev'})
  email: string
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty({example: 'João'})
  firstName: string
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({example: 'Dev'})
  lastName: string
  
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @ApiProperty()
  password: string
}

