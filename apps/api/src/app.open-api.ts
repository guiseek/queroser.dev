import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import {INestApplication} from '@nestjs/common'

export const appOpenAPI = (
  app: INestApplication,
  name: string,
  prefix = 'api',
  version = '1.0'
) => {
  const config = new DocumentBuilder()
    .setTitle(`${name}`)
    .setDescription(`${name} Open API doc`)
    .setVersion(version)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(prefix, app, document)
}
