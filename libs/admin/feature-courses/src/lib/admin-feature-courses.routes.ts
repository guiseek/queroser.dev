import {Route} from '@angular/router'
import {AdminFeatureCoursesContainer} from './admin-feature-courses.container'
import {
  CourseDetailsContainer,
  CourseListContainer,
  PlanCourseComponent,
} from './containers'
import {courseResolver} from './resolvers'
import {Course} from '@queroser.dev/shared/util-model'

export const adminFeatureCoursesRoutes: Route[] = [
  {
    path: '',
    component: AdminFeatureCoursesContainer,
    data: {
      breadcrumb: 'Cursos',
    },
    children: [
      {
        path: '',
        component: CourseListContainer,
        data: {
          breadcrumb: 'Lista',
        },
      },
      {
        path: 'plan',
        component: PlanCourseComponent,
        data: {
          breadcrumb: 'Inicio',
        },
      },
      {
        path: ':courseId',
        component: CourseDetailsContainer,
        data: {
          breadcrumb: (data: {course: Course}) => {
            return data.course.title
          },
        },
        resolve: {
          course: courseResolver,
        },
      },
    ],
  },
]
