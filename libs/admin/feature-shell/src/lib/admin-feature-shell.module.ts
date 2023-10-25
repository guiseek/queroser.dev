import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {SharedFeatureAuthModule} from '@queroser.dev/shared/feature-auth'
import {adminFeatureShellRoutes} from './admin-feature-shell.routes'
import {AdminFeatureShellContainer} from './admin-feature-shell.container'
import {
  ToolbarModule,
  SidenavModule,
  BreadcrumbModule,
  DrawerShellModule,
  MaterialLayoutModule,
} from '@queroser.dev/shared/ui-layout'

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    SidenavModule,
    BreadcrumbModule,
    DrawerShellModule,
    MaterialLayoutModule,
    SharedFeatureAuthModule,
    RouterModule.forChild(adminFeatureShellRoutes),
  ],
  declarations: [AdminFeatureShellContainer],
})
export class AdminFeatureShellModule {}
