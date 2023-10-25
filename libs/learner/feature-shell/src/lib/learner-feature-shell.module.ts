import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {
  ToolbarModule,
  DrawerShellModule,
  MaterialLayoutModule,
  SidenavModule,
  BreadcrumbModule,
} from '@queroser.dev/shared/ui-layout'
import {SharedFeatureAuthModule} from '@queroser.dev/shared/feature-auth'
import {LearnerFeatureShellContainer} from './learner-feature-shell.container'
import {learnerFeatureShellRoutes} from './learner-feature-shell.routes'

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    SidenavModule,
    BreadcrumbModule,
    DrawerShellModule,
    MaterialLayoutModule,
    SharedFeatureAuthModule,
    RouterModule.forChild(learnerFeatureShellRoutes),
  ],
  declarations: [LearnerFeatureShellContainer],
})
export class LearnerFeatureShellModule {}
