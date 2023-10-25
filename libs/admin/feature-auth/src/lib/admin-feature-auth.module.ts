import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {
  MaterialFormModule,
  MaterialLayoutModule,
} from '@queroser.dev/shared/ui-layout'
import {SharedFeatureAuthModule} from '@queroser.dev/shared/feature-auth'
import {AdminFeatureAdminContainer} from './admin-feature-auth.container'
import {adminFeatureAuthRoutes} from './admin-feature-auth.routes'

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    MaterialLayoutModule,
    ReactiveFormsModule,
    SharedFeatureAuthModule,
    RouterModule.forChild(adminFeatureAuthRoutes),
  ],
  declarations: [AdminFeatureAdminContainer],
})
export class AdminFeatureAuthModule {}
