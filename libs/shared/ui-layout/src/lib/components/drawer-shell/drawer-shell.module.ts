import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LayoutModule} from '@angular/cdk/layout'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {DrawerShellComponent} from './drawer-shell.component'
import {DrawerShellService} from './drawer-shell.service'

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  declarations: [DrawerShellComponent],
  providers: [DrawerShellService],
  exports: [
    DrawerShellComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class DrawerShellModule {}
