import {Course, CreateCourse, Results} from '@queroser.dev/shared/util-model'
import {Observable} from 'rxjs'

export abstract class CourseService {
  abstract findAll(): Observable<Results<Course>>
  abstract findOne(id: string): Observable<Course>
  abstract create(value: CreateCourse): Observable<Course>
  abstract update(id: string, value: Partial<Course>): Observable<Course>
  abstract remove(id: string): Observable<Course>
}
