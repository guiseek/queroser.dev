import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {AuthFacade} from '@queroser.dev/shared/data-access'

@Component({
  selector: 'portal-feature-shell',
  templateUrl: './portal-feature-shell.container.html',
  styleUrls: ['./portal-feature-shell.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortalFeatureShellContainer {
  authFacade = inject(AuthFacade)
}
