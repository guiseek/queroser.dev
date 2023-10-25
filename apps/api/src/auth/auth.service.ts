import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {MongoError} from '../utilities/mongo-error.enum'
import {TokenPayload} from './token-payload.interface'
import {UsersService} from '../users/users.service'
import {RegisterDto} from './dto/register.dto'
import {ConfigService} from '@nestjs/config'
import {JwtService} from '@nestjs/jwt'
import {compare, hash} from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {}

  async register(registrationData: RegisterDto) {
    const hashedPassword = await hash(registrationData.password, 10)
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

  getCookieWithJwtToken(userId: string) {
    const payload: TokenPayload = {userId}
    const token = this.jwtService.sign(payload)
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME'
    )}`
  }

  getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`
  }

  async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = (await this.usersService.getByEmail(email)).toJSON()
      await this.#verifyPassword(plainTextPassword, user.password)
      console.log(user)

      return user
      // return {password, ...user}
    } catch (error) {
      throw new HttpException('Credenciais inválidas', HttpStatus.BAD_REQUEST)
    }
  }

  async #verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await compare(plainTextPassword, hashedPassword)
    if (!isPasswordMatching) {
      throw new HttpException('Credenciais inválidas', HttpStatus.BAD_REQUEST)
    }
  }
}
