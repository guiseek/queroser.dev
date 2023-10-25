import {ExtractJwt, Strategy} from 'passport-jwt'
import {PassportStrategy} from '@nestjs/passport'
import {Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {Request} from 'express'
import {TokenPayload} from './token-payload.interface'
import {UsersService} from '../users/users.service'
import {plainToClass} from 'class-transformer'
import {UserDto} from '../users/dto/user.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    })
  }

  async validate(payload: TokenPayload) {
    const user = (await this.userService.getById(payload.userId)).toJSON()
    return plainToClass(UserDto, user)
  }
}
