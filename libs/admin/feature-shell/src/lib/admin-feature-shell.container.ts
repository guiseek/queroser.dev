import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {DrawerShellService} from '@queroser.dev/shared/ui-layout'
import {AuthFacade} from '@queroser.dev/shared/data-access'

@Component({
  selector: 'admin-feature-shell',
  templateUrl: './admin-feature-shell.container.html',
  styleUrls: ['./admin-feature-shell.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureShellContainer {
  drawerService = inject(DrawerShellService)

  authFacade = inject(AuthFacade)

  sections = [
    {
      heading: 'Grade',
      expanded: true,
      children: [
        {
          title: 'Categorias',
          path: ['/', 'admin', 'categorias'],
        },
        {
          title: 'Lista de cursos',
          path: ['/', 'admin', 'cursos'],
        },
        {
          title: 'Novo curso',
          path: ['/', 'admin', 'cursos', 'plan'],
        },
      ],
    },
    {
      heading: 'Usuários',
      expanded: true,
      children: [
        {
          title: 'Lista de usuários',
          path: [''],
        },
        {
          title: 'Novo usuário',
          path: [''],
        },
      ],
    },
  ]
}
