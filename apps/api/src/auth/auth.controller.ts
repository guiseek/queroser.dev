import {
  Get,
  Req,
  Body,
  Post,
  HttpCode,
  UseGuards,
  Controller,
  SerializeOptions,
} from '@nestjs/common'
import {ApiCookieAuth, ApiTags} from '@nestjs/swagger'
import {RequestWithUser} from './request-with-user.interface'
import {LocalAuthGuard} from './local-auth.guard'
import {RegisterDto} from './dto/register.dto'
import {JwtAuthGuard} from './jwt-auth.guard'
import {AuthService} from './auth.service'

@ApiTags('auth')
@ApiCookieAuth()
@Controller('auth')
// @UseInterceptors(MongooseClassSerializerInterceptor(User))
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authService.register(registrationData)
  }

  @HttpCode(200)
  @Post('log-in')
  @UseGuards(LocalAuthGuard)
  async logIn(@Req() request: RequestWithUser) {
    const {user} = request
    const cookie = this.authService.getCookieWithJwtToken(user._id)
    request.res?.setHeader('Set-Cookie', cookie)
    return user
  }

  @HttpCode(200)
  @Post('log-out')
  @UseGuards(JwtAuthGuard)
  async logOut(@Req() request: RequestWithUser) {
    request.res?.setHeader('Set-Cookie', this.authService.getCookieForLogOut())
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @SerializeOptions({
    excludePrefixes: ['_'],
  })
  authenticate(@Req() request: RequestWithUser) {
    console.log(request.user)
    return request.user
  }
}
