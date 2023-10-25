import {IsEmail, IsString, IsNotEmpty, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class RegisterDto {
  @ApiProperty({example: 'email@guiseek.dev'})
  @IsEmail({}, {message: 'Endereço de e-mail inválido'})
  email: string

  @ApiProperty({example: 'Gui'})
  @IsString({message: 'Nome deve ser texto'})
  @IsNotEmpty({message: 'Nome obrigatório'})
  @ApiProperty()
  firstName: string

  @ApiProperty({example: 'Seek'})
  @IsString({message: 'Sobrenome deve ser texto'})
  @IsNotEmpty({message: 'Sobrenome obrigatório'})
  lastName: string

  @ApiProperty()
  @IsString({message: 'Senha deve ser alfanumérica'})
  @IsNotEmpty({message: 'Senha obrigatório'})
  @MinLength(7, {message: 'Senha deve ter mínimo 7 digitos'})
  password: string
}
