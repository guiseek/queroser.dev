import {Http} from '@queroser.dev/shared/data-access'
import {CategoryServiceImpl} from '../infrastructure'
import {CategoryFacade} from '../application'
import {CategoryService} from '../ports'

export const provideCategory = () => [
  {
    provide: CategoryService,
    useClass: CategoryServiceImpl,
    deps: [Http],
  },
  {
    provide: CategoryFacade,
    deps: [CategoryService],
  },
]
