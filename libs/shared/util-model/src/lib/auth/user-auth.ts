import {UserRoleLiteral} from '../user'

export interface UserAuth {
  email: string
  firstName: string
  lastName: string
  roles: UserRoleLiteral[]
}
