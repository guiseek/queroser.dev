import {PortalFeatureShellContainer} from './portal-feature-shell.container'
import {roleGuard} from '@queroser.dev/shared/feature-auth'
import {Route} from '@angular/router'

export const portalFeatureShellRoutes: Route[] = [
  {
    path: '',
    canActivate: [roleGuard('user')],
    component: PortalFeatureShellContainer,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@queroser.dev/portal/feature-home').then(
            (m) => m.PortalFeatureHomeModule
          ),
      },
    ],
  },
]
