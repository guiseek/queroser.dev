import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {
  MaterialFormModule,
  MaterialLayoutModule,
} from '@queroser.dev/shared/ui-layout'
import {RegisterComponent, LogInComponent} from './components'
import {adminFeatureAuthRoutes} from './admin-feature-auth.routes'
import {AdminFeatureAdminContainer} from './admin-feature-auth.container'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    MaterialLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminFeatureAuthRoutes),
  ],
  declarations: [AdminFeatureAdminContainer, RegisterComponent, LogInComponent],
})
export class AdminFeatureAuthModule {}
