import {InitialRoute, UserRoleLiteral} from '@queroser.dev/shared/util-model'
import {InjectionToken} from '@angular/core'

export type SharedFeatureAuthOptions = Record<UserRoleLiteral, InitialRoute[]>
export type UserRoleHumanized = Record<UserRoleLiteral, string>

export const SHARED_FEATURE_AUTH_OPTIONS =
  new InjectionToken<SharedFeatureAuthOptions>('shared-feature-auth.options')

const PORTAL = {name: 'Conteúdos', path: '/'}
const LEARNER = {name: 'Aprendizado', path: '/aprenda'}
const ADMIN = {name: 'Produção', path: '/admin'}

export const sharedFeatureAuthOptionsDefault: SharedFeatureAuthOptions = {
  admin: [PORTAL, LEARNER, ADMIN],
  learner: [LEARNER],
  user: [PORTAL],
}

export const userRolesMap: UserRoleHumanized = {
  user: 'usuários',
  learner: 'estudantes',
  admin: 'administradores',
}
