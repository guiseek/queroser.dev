import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {MongoError} from '../utilities/mongo-error.enum'
import {TokenPayload} from './token-payload.interface'
import {UsersService} from '../users/users.service'
import {RegisterDto} from './dto/register.dto'
import {ConfigService} from '@nestjs/config'
import {JwtService} from '@nestjs/jwt'
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {}

  public async register(registrationData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10)
    try {
      await this.usersService.create({
        ...registrationData,
        password: hashedPassword,
      })
      return
    } catch (error) {
      if (error?.code === MongoError.DuplicateKey) {
        throw new HttpException(
          'Este e-mail já está sendo usado',
          HttpStatus.BAD_REQUEST
        )
      }
      throw new HttpException(
        'Algo estranho aconteceu',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  public getCookieWithJwtToken(userId: string) {
    const payload: TokenPayload = {userId}
    const token = this.jwtService.sign(payload)
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME'
    )}`
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.usersService.getByEmail(email)
      await this.verifyPassword(plainTextPassword, user.password)
      return user
    } catch (error) {
      throw new HttpException('Credenciais inválidas', HttpStatus.BAD_REQUEST)
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    )
    if (!isPasswordMatching) {
      throw new HttpException('Credenciais inválidas', HttpStatus.BAD_REQUEST)
    }
  }
}
