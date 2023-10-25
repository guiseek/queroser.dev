import {UserRole} from '@queroser.dev/shared/util-model'
import {SetMetadata} from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles)
