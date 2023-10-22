import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {adminFeaturePostsRoutes} from './admin-feature-posts.routes'
import {AdminFeaturePostsContainer} from './admin-feature-posts.container'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminFeaturePostsRoutes)],
  declarations: [AdminFeaturePostsContainer],
})
export class AdminFeaturePostsModule {}
