import {Pipe, PipeTransform} from '@angular/core'
import {UserRoleLiteral} from '@queroser.dev/shared/util-model'
import {userRolesMap} from '../shared-feature-auth.options'

@Pipe({name: 'userRoles', pure: true})
export class UserRolesPipe implements PipeTransform {
  transform(roles: UserRoleLiteral[]) {
    if (roles.length > 1) {
      const last = roles.pop()
      const lastRole = last ? userRolesMap[last] : ''
      return this.#concat(roles) + ' e ' + lastRole
    }
    return this.#concat(roles)
  }

  #concat(roles: UserRoleLiteral[]) {
    return roles.map((role) => userRolesMap[role]).join(', ')
  }
}
