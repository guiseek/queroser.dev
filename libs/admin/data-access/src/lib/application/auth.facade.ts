import {Observable, catchError, switchMap, take, tap} from 'rxjs'
import {Store} from '@queroser.dev/shared/data-access'
import {AuthService} from '../ports'
import {
  LogIn,
  HttpError,
  Register,
  UserAuth,
} from '@queroser.dev/shared/util-model'

type AuthAction = 'login' | ''

interface AuthState {
  message: string | null
  user: UserAuth | null
  action: AuthAction
}

const initialValue: AuthState = {
  message: null,
  user: null,
  action: '',
}

export class AuthFacade extends Store(initialValue) {
  message$ = this.pick('message')
  action$ = this.pick('action')
  user$ = this.pick('user')

  constructor(private service: AuthService) {
    super()
  }

  logIn(value: LogIn) {
    this.setState({message: null})

    const auth$ = this.service
      .logIn(value)
      .pipe(take(1), catchError(this.handleError))

    auth$.subscribe(this.setUser)
  }

  logOut() {
    const auth$ = this.service.logOut().pipe(take(1), switchMap(this.check))

    auth$.subscribe(this.reset)
  }

  register(value: Register) {
    const auth$ = this.service
      .register(value)
      .pipe(take(1), catchError(this.handleError))

    auth$.subscribe(() => this.setState({action: 'login'}))
  }

  check = () => {
    const check$ = this.service.check()
    return check$.pipe(
      take(1),
      tap(this.setUser)
    )
  }

  setUser = (user: UserAuth) => {
    this.setState({user})
  }

  reset = () => {
    this.setState({user: null})
  }

  handleError = <T>(err: HttpError, caught: Observable<T>) => {
    if (err) {
      console.log(err)
      const {message} = err.error

      this.setState({message})
      throw err
    }

    return caught
  }
}
