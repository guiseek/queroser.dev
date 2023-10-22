import {ApiProperty} from '@nestjs/swagger'
import {Exclude, Type} from 'class-transformer'
import {PostDto} from '../../posts/dto/post.dto'
import {AddressDto} from './address.dto'

export class UserDto {
  _id: string
  
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
  address: AddressDto

  @Type(() => PostDto)
  posts: PostDto[]
}
