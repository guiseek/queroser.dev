import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {portalFeatureHomeRoutes} from './portal-feature-home.routes'
import {PortalFeatureHomeContainer} from './portal-feature-home.container'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(portalFeatureHomeRoutes)],
  declarations: [PortalFeatureHomeContainer],
})
export class PortalFeatureHomeModule {}
