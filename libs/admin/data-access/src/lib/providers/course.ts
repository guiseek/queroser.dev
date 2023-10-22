import {Http} from '@queroser.dev/shared/data-access'
import {CourseServiceImpl} from '../infrastructure'
import {CourseFacade} from '../application'
import {CourseService} from '../ports'

export const provideCourse = () => [
  {
    provide: CourseService,
    useClass: CourseServiceImpl,
    deps: [Http],
  },
  {
    provide: CourseFacade,
    deps: [CourseService],
  },
]
