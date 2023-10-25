import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {SidenavComponent} from './sidenav.component'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatListModule} from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatDividerModule} from '@angular/material/divider'
import {SidenavSectionComponent} from './sidenav-section.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [SidenavComponent, SidenavSectionComponent],
  exports: [SidenavComponent, SidenavSectionComponent],
})
export class SidenavModule {}
