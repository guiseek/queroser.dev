import {NgModule} from '@angular/core'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {ToolbarComponent} from './toolbar.component'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ToolbarMenuComponent} from './toolbar-menu.component'
import {MatMenuModule} from '@angular/material/menu'
import {MatDividerModule} from '@angular/material/divider'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
  ],
  declarations: [ToolbarComponent, ToolbarMenuComponent],
  exports: [ToolbarComponent, ToolbarMenuComponent],
})
export class ToolbarModule {}
