import {Http} from '@queroser.dev/shared/data-access'
import {AuthServiceImpl} from '../infrastructure'
import {AuthFacade} from '../application'
import {AuthService} from '../ports'

export const provideAuth = () => [
  {
    provide: AuthService,
    useClass: AuthServiceImpl,
    deps: [Http],
  },
  {
    provide: AuthFacade,
    deps: [AuthService],
  },
]
