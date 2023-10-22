import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prefix = 'api';
  app.setGlobalPrefix(prefix);

  await app.listen(process.env.PORT || 3000).then(async () => {
    Logger.log(`🚀 API is running on: ${await app.getUrl()}/${prefix}`);
  });
}

bootstrap();
