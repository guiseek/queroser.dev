import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Address, AddressSchema} from './address.schema'
import {Course} from '../courses/course.schema'
import {Document} from 'mongoose'

export type UserDocument = User & Document

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User {
  // @Transform(({value}) => value.toString())
  // _id: ObjectId

  @Prop({unique: true})
  email: string

  @Prop()
  firstName: string

  @Prop()
  lastName: string

  fullName: string

  @Prop()
  password: string

  @Prop({type: AddressSchema})
  address: Address

  courses: Course[]
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.index({firstName: 'text', lastName: 'text'})

UserSchema.virtual('fullName').get(function (this: User) {
  return `${this.firstName} ${this.lastName}`
})

UserSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'author',
})
