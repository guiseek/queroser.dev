import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document, ObjectId, Types} from 'mongoose'
import {User} from '../users/user.schema'
import {Transform} from 'class-transformer'
import {Category} from '../categories/category.schema'
import {Series} from '../series/series.schema'

export type PostDocument = Post & Document

@Schema()
export class Post {
  @Transform(({value}) => value.toString())
  _id: ObjectId

  @Prop()
  title: string

  @Prop({
    set: (content: string) => {
      return content.trim()
    },
  })
  content: string

  @Prop({type: Types.ObjectId, ref: 'Author'})
  author: User

  @Prop({
    type: [{type: Types.ObjectId, ref: 'Category'}],
  })
  categories: Category[]

  @Prop({
    type: Types.ObjectId,
    ref: 'Serie',
  })
  series?: Series
}

const PostSchema = SchemaFactory.createForClass(Post)

PostSchema.index({title: 'text', content: 'text'})

export {PostSchema}
