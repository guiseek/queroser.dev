import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {MatDialogModule} from '@angular/material/dialog'
import {adminFeatureCoursesRoutes} from './admin-feature-courses.routes'
import {AdminFeatureCoursesContainer} from './admin-feature-courses.container'
import {CourseListContainer, PlanCourseComponent, CourseDetailsContainer} from './containers'
import {
  ConfirmActionModule,
  MaterialFormModule,
  MaterialLayoutModule,
  MaterialTableModule,
} from '@queroser.dev/shared/ui-layout'

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MaterialFormModule,
    MaterialTableModule,
    MaterialLayoutModule,
    ReactiveFormsModule,
    ConfirmActionModule,
    RouterModule.forChild(adminFeatureCoursesRoutes),
  ],
  declarations: [
    AdminFeatureCoursesContainer,
    CourseListContainer,
    CourseDetailsContainer,
    PlanCourseComponent,
  ],
})
export class AdminFeatureCoursesModule {}
