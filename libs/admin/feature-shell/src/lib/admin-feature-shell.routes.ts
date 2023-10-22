import {AdminFeatureShellContainer} from './admin-feature-shell.container'
import {Route} from '@angular/router'
import {adminGuard} from './guards'

export const adminFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: AdminFeatureShellContainer,
    canActivate: [adminGuard],
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
        path: 'posts',
        loadChildren: () =>
          import('@queroser.dev/admin/feature-posts').then(
            (m) => m.AdminFeaturePostsModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cursos'
      }
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
