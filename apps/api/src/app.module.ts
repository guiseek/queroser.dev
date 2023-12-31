import {ConfigModule, ConfigService} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose'
import {Module} from '@nestjs/common'
import {CategoriesModule} from './categories/categories.module'
import {CoursesModule} from './courses/courses.module'
import {AuthModule} from './auth/auth.module'
import Joi from '@hapi/joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_USERNAME: Joi.string().required(),
        MONGO_PASSWORD: Joi.string().required(),
        MONGO_DATABASE: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get('MONGO_USERNAME')
        const password = configService.get('MONGO_PASSWORD')
        const database = configService.get('MONGO_DATABASE')
        const host = configService.get('MONGO_HOST')

        return {
          uri: `mongodb://${username}:${password}@${host}`,
          dbName: database,
        }
      },
      inject: [ConfigService],
    }),
    AuthModule,
    CategoriesModule,
    CoursesModule,
  ],
})
export class AppModule {}
