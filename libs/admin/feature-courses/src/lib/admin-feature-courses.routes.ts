import {Route} from '@angular/router'
import {AdminFeatureCoursesContainer} from './admin-feature-courses.container'
import {CourseDetailsContainer, CourseListContainer} from './containers'

export const adminFeatureCoursesRoutes: Route[] = [
  {
    path: '',
    component: AdminFeatureCoursesContainer,
    children: [
      {
        path: '',
        component: CourseListContainer,
      },
      {
        path: ':courseId',
        component: CourseDetailsContainer,
      },
    ],
  },
]
