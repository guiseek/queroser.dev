import {Logger, ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'

import {AppModule} from './app.module'
import {appOpenAPI} from './app.open-api'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const prefix = 'api'
  app.setGlobalPrefix(prefix)
  app.useGlobalPipes(new ValidationPipe({transform: true}))

  appOpenAPI(app, 'Quero Ser Dev')

  await app.listen(process.env.PORT || 3000).then(async () => {
    Logger.log(`🚀 API is running on: ${await app.getUrl()}/${prefix}`)
  })
}

bootstrap()
