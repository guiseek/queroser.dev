import {LearnerFeatureShellContainer} from './learner-feature-shell.container'
import {roleGuard} from '@queroser.dev/shared/feature-auth'
import {Route} from '@angular/router'

export const learnerFeatureShellRoutes: Route[] = [
  {
    path: '',
    canActivate: [roleGuard('learner')],
    component: LearnerFeatureShellContainer,
  },
]
