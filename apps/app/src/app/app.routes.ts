import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'aprenda',
    loadChildren: () =>
      import('@queroser.dev/learner/feature-shell').then(
        (m) => m.LearnerFeatureShellModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@queroser.dev/admin/feature-shell').then(
        (m) => m.AdminFeatureShellModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@queroser.dev/portal/feature-shell').then(
        (m) => m.PortalFeatureShellModule
      ),
  },
]
