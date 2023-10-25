import {Store} from '@queroser.dev/shared/data-access'
import {
  Course,
  CreateCourse,
  UpdateCourse,
} from '@queroser.dev/shared/util-model'
import {CourseService} from '../ports'
import {map, take, tap} from 'rxjs'

interface CourseState {
  course: Course | null
  message: string | null
  results: Course[]
  count: number
}

const initialValue: CourseState = {
  course: null,
  message: null,
  results: [],
  count: 0,
}

export class CourseFacade extends Store(initialValue) {
  message$ = this.pick('message')
  results$ = this.pick('results')
  course$ = this.pick('course')
  count$ = this.pick('count')

  constructor(private courseService: CourseService) {
    super()
  }

  loadAll() {
    const courses$ = this.courseService.findAll().pipe(take(1))
    courses$.subscribe((response) => {
      this.setState(response)
    })
  }

  loadOne(id: string) {
    const course$ = this.courseService.findOne(id).pipe(take(1))
    course$.subscribe((course) => {
      this.setState({course})
    })
  }

  findOne(id: string) {
    return this.courseService.findOne(id).pipe(
      map((course) => {
        this.setCourse(course)
        return course
      }),
      take(1)
    )
  }

  create(value: CreateCourse) {
    const course$ = this.courseService.create(value).pipe(take(1))
    course$.subscribe((course) => {
      this.setState({course})
      this.loadAll()
    })
  }

  update({id, ...value}: UpdateCourse) {
    const course$ = this.courseService.update(id, value).pipe(take(1))
    course$.subscribe((course) => {
      this.setState({course})
      this.loadAll()
    })
  }

  setCourse = (course: Course | null) => {
    this.setState({course})
  }

  remove(id: string) {
    const course$ = this.courseService.remove(id).pipe(take(1))
    course$.subscribe((course) => {
      this.setState({course})
      this.loadAll()
    })
  }
}
