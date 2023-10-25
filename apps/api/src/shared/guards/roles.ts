import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common'
import {UserRole, hasRole} from '@queroser.dev/shared/util-model'
import {ROLES_KEY} from '../decorators'
import {Reflector} from '@nestjs/core'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    )

    console.log(requiredRoles);
    

    if (!requiredRoles) {
      return true
    }

    const {user} = context.switchToHttp().getRequest()
    return requiredRoles.some((role) => hasRole(user, role))
  }
}
