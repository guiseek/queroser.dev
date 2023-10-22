import {AuthFacade} from '@queroser.dev/admin/data-access'
import {CanActivateFn} from '@angular/router'
import {inject} from '@angular/core'
import {catchError, map, take} from 'rxjs'

export const adminGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade)

  return authFacade.check().pipe(
    catchError((err, caught) => {
      if (err) {
        throw err
      }

      return caught
    }),
    map((user) => !!user),
    take(1)
  )
}
