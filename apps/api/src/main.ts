import {Logger, ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'
import cookieParser from 'cookie-parser'

import {appOpenAPI} from './app.open-api'
import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const prefix = 'api'
  app.setGlobalPrefix(prefix)
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  // app.useGlobalFilters(new HttpExceptionFilter())
  app.use(cookieParser())

  appOpenAPI(app, 'quero ser .dev')

  await app.listen(process.env.PORT || 3000).then(async () => {
    Logger.log(`🚀 API is running on: ${await app.getUrl()}/${prefix}`)
  })
}

bootstrap()
