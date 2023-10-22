import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {
  ConfirmActionModule,
  MaterialFormModule,
  MaterialLayoutModule,
} from '@queroser.dev/shared/ui-layout'
import {adminFeatureCategoriesRoutes} from './admin-feature-categories.routes'
import {AdminFeatureCategoriesContainer} from './admin-feature-categories.container'

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    ConfirmActionModule,
    MaterialLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminFeatureCategoriesRoutes),
  ],
  declarations: [AdminFeatureCategoriesContainer],
})
export class AdminFeatureCategoriesModule {}
