import {InitialRoute} from '../interfaces'
import {UserAuth} from './user-auth'

export interface UserOptionsData {
  user: UserAuth
  options: InitialRoute[]
}
