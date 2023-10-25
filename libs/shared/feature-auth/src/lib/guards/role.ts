import {
  hasRole,
  UserAuth,
  UserOptionsData,
  UserRoleLiteral,
} from '@queroser.dev/shared/util-model'
import {inject} from '@angular/core'
import {map, of, switchMap, take} from 'rxjs'
import {CanActivateFn} from '@angular/router'
import {AuthFacade} from '@queroser.dev/shared/data-access'
import {MatBottomSheet} from '@angular/material/bottom-sheet'
import {SHARED_FEATURE_AUTH_OPTIONS} from '../shared-feature-auth.options'
import {UserOptionsComponent} from '../components'

export const roleGuard = (role: UserRoleLiteral): CanActivateFn => {
  return () => {
    const authFacade = inject(AuthFacade)
    const bottomSheet = inject(MatBottomSheet)
    const authOptions = inject(SHARED_FEATURE_AUTH_OPTIONS)

    const handleOptions = (user: UserAuth, granted: boolean) => {
      const options = user.roles.map((role) => authOptions[role]).flat()
      const data: UserOptionsData = {user, options}

      return bottomSheet
        .open(UserOptionsComponent, {data})
        .afterDismissed()
        .pipe(map(() => granted))
    }

    return authFacade.check().pipe(
      take(1),
      switchMap((user) => {
        const granted = hasRole(user, role)

        if (!granted) {
          return handleOptions(user, granted)
        }

        return of(granted)
      })
    )
  }
}
