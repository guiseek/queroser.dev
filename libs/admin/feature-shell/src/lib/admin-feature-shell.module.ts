import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {adminFeatureShellRoutes} from './admin-feature-shell.routes'
import {AdminFeatureShellContainer} from './admin-feature-shell.container'
import {DrawerShellModule, UiLayoutModule} from '@queroser.dev/shared/ui-layout'

@NgModule({
  imports: [
    CommonModule,
    UiLayoutModule,
    DrawerShellModule,
    RouterModule.forChild(adminFeatureShellRoutes),
  ],
  declarations: [AdminFeatureShellContainer]
})
export class AdminFeatureShellModule {}
