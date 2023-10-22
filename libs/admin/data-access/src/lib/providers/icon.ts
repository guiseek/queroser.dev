import {Http} from '@queroser.dev/shared/data-access'
import {DevLogosServiceImpl} from '../infrastructure'
import {IconFacade} from '../application'
import {DevLogosService} from '../ports'

export const provideIcon = () => [
  {
    provide: DevLogosService,
    useClass: DevLogosServiceImpl,
    deps: [Http],
  },
  {
    provide: IconFacade,
    deps: [DevLogosService],
  },
]
