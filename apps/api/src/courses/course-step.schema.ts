import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type CourseStepDocument = CourseStep & Document

@Schema({_id: false})
export class CourseStep {
  @Prop()
  order: number

  @Prop()
  title: string

  @Prop()
  subtitle: string

  @Prop({
    set: (content: string) => {
      return content.trim()
    },
  })
  content: string
}

const CourseStepSchema = SchemaFactory.createForClass(CourseStep)

CourseStepSchema.index({title: 'text', subtitle: 'text'})

export {CourseStepSchema}
