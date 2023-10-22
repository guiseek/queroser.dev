import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type CourseProgressDocument = CourseProgress & Document

@Schema({_id: false})
export class CourseProgress {
  @Prop({default: 0})
  currentStep: number

  @Prop({default: 0})
  completed: number
}

export const CourseProgressSchema = SchemaFactory.createForClass(CourseProgress)
