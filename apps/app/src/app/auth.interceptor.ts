import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http'
import {AuthFacade} from '@queroser.dev/admin/data-access'
import {Router} from '@angular/router'
import {inject} from '@angular/core'
import {catchError} from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const authFacade = inject(AuthFacade)

  const urlToRedirect = '/admin/auth'

  const handleRedirect = () => {
    if (router.url !== urlToRedirect) {
      router.navigateByUrl(urlToRedirect)
    }
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse, caught) => {
      if (err) {
        if (err.status === 401) {
          authFacade.reset()
          handleRedirect()
        }
        throw err
      }
      return caught
    })
  )
}
