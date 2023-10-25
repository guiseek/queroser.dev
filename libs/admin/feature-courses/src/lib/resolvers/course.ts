import {CourseFacade} from '@queroser.dev/admin/data-access'
import {Course} from '@queroser.dev/shared/util-model'
import {ResolveFn} from '@angular/router'
import {inject} from '@angular/core'
import {Observable} from 'rxjs'

export const courseResolver: ResolveFn<Observable<Course>> = (route) => {
  const facade = inject(CourseFacade)
  const {courseId} = route.params
  return facade.findOne(courseId)
}
