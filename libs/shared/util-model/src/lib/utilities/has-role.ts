import {UserRoleLiteral} from '../user'
import {UserAuth} from '../auth'

export const hasRole = (user: UserAuth, role: UserRoleLiteral) => {
  return user.roles.includes(role)
}
