import {Course, CreateCourse, Results} from '@queroser.dev/shared/util-model'
import {Http} from '@queroser.dev/shared/data-access'
import {CourseService} from '../ports'

export class CourseServiceImpl implements CourseService {
  constructor(private http: Http) {}

  findAll() {
    return this.http.get<Results<Course>>('/api/courses')
  }

  findOne(id: string) {
    return this.http.get<Course>('/api/courses/' + id)
  }

  create(value: CreateCourse) {
    return this.http.post<Course>('/api/courses', value)
  }

  update(id: string, value: Partial<Course>) {
    return this.http.put<Course>('/api/courses/' + id, value)
  }

  remove(id: string) {
    return this.http.delete<Course>('/api/courses/' + id)
  }
}
