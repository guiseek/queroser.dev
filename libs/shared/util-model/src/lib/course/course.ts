import {Category} from '../category'
import {User} from '../user'

export interface CourseProgress {
  currentStep: number
  completed: number
}

export interface CourseStep {
  order: number
  title: string
  subtitle: string
  content: string
}

export interface Course {
  id: string
  title: string
  slug: string
  intro: string
  icon?: string
  duration: number
  steps: CourseStep[]
  progress: CourseProgress
  categories: Category[]
  author: User
  createdAt: Date
  updatedAt: Date
}
