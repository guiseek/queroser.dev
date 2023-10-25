import {CourseStep} from '../course'

export interface UpdateCourse {
  id: string
  title: string
  intro: string
  icon?: string
  steps: CourseStep[]
}
