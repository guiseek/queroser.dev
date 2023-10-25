import {AuthServiceImpl} from '../infrastructure'
import {AuthService, Http} from '../ports'
import {AuthFacade} from '../application'

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
