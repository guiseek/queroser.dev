import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core'
import {DrawerShellService} from '../drawer-shell/drawer-shell.service'

@Component({
  selector: 'dev-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  drawerService = inject(DrawerShellService)

  @Input()
  showToggleMenu = false
}
