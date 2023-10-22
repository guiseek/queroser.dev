import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {UserSchema, User} from './user.schema'
import {CoursesModule} from '../courses/courses.module'
import {UsersService} from './users.service'

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    // PostsModule,
    CoursesModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
