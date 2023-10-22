import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('@queroser.dev/admin/feature-shell').then(
        (m) => m.AdminFeatureShellModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
]
