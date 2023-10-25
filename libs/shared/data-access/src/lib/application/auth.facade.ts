import {catchError, map, switchMap, take, tap} from 'rxjs'
import {AuthService} from '../ports'
import {Store} from '../state'
import {
  LogIn,
  Register,
  UserAuth,
  hasRole,
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

  isAdmin$ = this.select((state) => state.user).pipe(
    map((user) => user && hasRole(user, 'admin'))
  )
  isLearner$ = this.select((state) => state.user).pipe(
    map((user) => user && hasRole(user, 'learner'))
  )
  isUser$ = this.select((state) => state.user).pipe(
    map((user) => user && hasRole(user, 'user'))
  )

  constructor(private service: AuthService) {
    super()
  }

  logIn(value: LogIn) {
    this.#setMessage()

    const auth$ = this.service
      .logIn(value)
      .pipe(take(1), catchError(this.handleError))

    auth$.subscribe((user) => {
      this.#setUser(user)
    })
  }

  logOut() {
    this.#setMessage()

    const auth$ = this.service.logOut().pipe(
      take(1),
      switchMap(() => {
        return this.check()
      })
    )

    auth$.subscribe(() => {
      this.reset()
    })
  }

  register(value: Register) {
    this.#setMessage()

    const auth$ = this.service
      .register(value)
      .pipe(take(1), catchError(this.handleError))

    auth$.subscribe(() => {
      this.#setAction('login')
    })
  }

  check() {
    const check$ = this.service.check()
    return check$.pipe(take(1), tap(this.#setUser))
  }

  reset() {
    this.setState({user: null})
  }

  /**
   * Internal helpers
   */
  #setUser = (user: UserAuth) => {
    this.setState({user})
  }

  #setAction = (action: AuthAction) => {
    this.setState({action})
  }

  #setMessage(message = null) {
    this.setState({message})
  }
}
