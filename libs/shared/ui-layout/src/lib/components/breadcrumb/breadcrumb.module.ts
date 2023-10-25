import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {MatToolbarModule} from '@angular/material/toolbar'
import {BreadcrumbsComponent} from './breadcrumb.component'
import {BreadcrumbService} from './breadcrumb.service'

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule],
  exports: [BreadcrumbsComponent],
  providers: [BreadcrumbService],
})
export class BreadcrumbModule {}
