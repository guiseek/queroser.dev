import {Input, inject, Component, ChangeDetectionStrategy} from '@angular/core'
import {DrawerShellService} from './drawer-shell.service'
import {MatDrawerMode} from '@angular/material/sidenav'

@Component({
  selector: 'dev-drawer-shell',
  templateUrl: './drawer-shell.component.html',
  styleUrls: ['./drawer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerShellComponent {
  @Input() hasBackdrop = true

  @Input() mode: MatDrawerMode = 'push'

  service = inject(DrawerShellService)
}
