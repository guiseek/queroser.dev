import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {
  DrawerShellModule,
  MaterialLayoutModule,
  ToolbarModule,
} from '@queroser.dev/shared/ui-layout'
import {SharedFeatureAuthModule} from '@queroser.dev/shared/feature-auth'
import {PortalFeatureShellContainer} from './portal-feature-shell.container'
import {portalFeatureShellRoutes} from './portal-feature-shell.routes'

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    DrawerShellModule,
    MaterialLayoutModule,
    SharedFeatureAuthModule,
    RouterModule.forChild(portalFeatureShellRoutes),
  ],
  declarations: [PortalFeatureShellContainer],
})
export class PortalFeatureShellModule {}
