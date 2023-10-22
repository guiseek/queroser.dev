import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Category} from '../categories/category.schema'
import {CourseProgress} from './course-progress.schema'
import {CourseStep} from './course-step.schema'
import {User} from '../users/user.schema'
import {Document, ObjectId, Types} from 'mongoose'

export type CourseDocument = Course & Document

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class Course {
  // @Transform(({value}) => value.toString())
  _id: ObjectId

  @Prop()
  title: string

  @Prop()
  slug: string

  @Prop({
    set: (intro: string) => {
      return intro.trim()
    },
  })
  intro: string

  @Prop()
  duration: number

  @Prop([CourseStep])
  steps: CourseStep[]

  @Prop(CourseProgress)
  progress: CourseProgress

  @Prop({type: Types.ObjectId, ref: 'Author'})
  author: User

  @Prop({
    type: [{type: Types.ObjectId, ref: 'Category'}],
  })
  categories: Category[]
}

const CourseSchema = SchemaFactory.createForClass(Course)

CourseSchema.index({title: 'text', intro: 'text'})

export {CourseSchema}
