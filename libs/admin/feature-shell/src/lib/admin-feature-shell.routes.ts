import {AdminFeatureShellContainer} from './admin-feature-shell.container'
import {roleGuard} from '@queroser.dev/shared/feature-auth'
import {Route} from '@angular/router'

export const adminFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: AdminFeatureShellContainer,
    canActivate: [roleGuard('admin')],
    data: {
      breadcrumb: 'Admin',
    },
    children: [
      {
        path: 'cursos',
        loadChildren: () =>
          import('@queroser.dev/admin/feature-courses').then(
            (m) => m.AdminFeatureCoursesModule
          ),
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('@queroser.dev/admin/feature-categories').then(
            (m) => m.AdminFeatureCategoriesModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cursos',
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@queroser.dev/admin/feature-auth').then(
        (m) => m.AdminFeatureAuthModule
      ),
  },
]
