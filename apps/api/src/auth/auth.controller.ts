import {
  Get,
  Req,
  Body,
  Post,
  HttpCode,
  UseGuards,
  Controller,
  UseInterceptors,
} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'
import {AuthService} from './auth.service'
import {MongooseClassSerializerInterceptor} from '../utilities'
import {RequestWithUser} from './request-with-user.interface'
import {LocalAuthGuard} from './local-auth.guard'
import {RegisterDto} from './dto/register.dto'
import {JwtAuthGuard} from './jwt-auth.guard'
import {User} from '../users/user.schema'

@ApiTags('auth')
@Controller('auth')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class AuthController {
  constructor(private readonly authenticationService: AuthService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData)
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const {user} = request
    const cookie = this.authenticationService.getCookieWithJwtToken(user._id)
    request.res?.setHeader('Set-Cookie', cookie)
    return user
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    return request.user
  }
}
