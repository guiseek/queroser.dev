import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document, Types} from 'mongoose'
import {User} from '../users/user.schema'

export type CategoryDocument = Category & Document

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class Category {
  // @Transform(({value}) => value.toString())
  // _id: ObjectId

  @Prop()
  name: string

  @Prop()
  slug: string

  @Prop({type: Types.ObjectId, ref: 'Author'})
  author: User
}

export const CategorySchema = SchemaFactory.createForClass(Category)
