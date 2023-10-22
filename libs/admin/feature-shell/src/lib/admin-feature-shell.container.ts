import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {DrawerShellService} from '@queroser.dev/shared/ui-layout'
import {AuthFacade} from '@queroser.dev/admin/data-access'

@Component({
  selector: 'admin-feature-shell',
  templateUrl: './admin-feature-shell.container.html',
  styleUrls: ['./admin-feature-shell.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureShellContainer {
  drawerService = inject(DrawerShellService)

  authFacade = inject(AuthFacade)
}
