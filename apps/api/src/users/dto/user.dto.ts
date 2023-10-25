import {ApiProperty} from '@nestjs/swagger'
import {Exclude, Type} from 'class-transformer'
import {AddressDto} from './address.dto'
import {CourseDto} from '../../courses/dto/course.dto'
import {UserRole} from '@queroser.dev/shared/util-model'

export class UserDto {
  @Exclude()
  _id: string

  id: string

  @ApiProperty()
  email: string

  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  fullName: string

  @Exclude()
  password: string

  @Type(() => AddressDto)
  @ApiProperty()
  address: AddressDto

  @Type(() => CourseDto)
  @ApiProperty()
  courses: CourseDto[]

  @ApiProperty({
    enum: UserRole,
  })
  roles: UserRole[]

  @Exclude()
  __v?: string
  // @Type(() => PostDto)
  // posts: PostDto[]
}
