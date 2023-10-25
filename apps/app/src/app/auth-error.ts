import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http'
import {AuthFacade} from '@queroser.dev/shared/data-access'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Router} from '@angular/router'
import {inject} from '@angular/core'
import {catchError} from 'rxjs'

export const authError: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const snackBar = inject(MatSnackBar)
  const authFacade = inject(AuthFacade)

  const urlToRedirect = '/admin/auth'

  const handleUnauthorized = () => {
    authFacade.reset()

    if (router.url !== urlToRedirect) {
      router.navigateByUrl(urlToRedirect)
    }
  }

  const handleForbidden = () => {
    snackBar.open('Acesso negado', 'Fechar', {duration: 4000})
  }

  const handleAuthError = (err: HttpErrorResponse) => {
    switch (err.status) {
      case 401:
        return handleUnauthorized()
      case 403:
        return handleForbidden()
      default:
        return
    }
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse, caught) => {
      if (err) {
        handleAuthError(err)
        throw err
      }
      return caught
    })
  )
}
