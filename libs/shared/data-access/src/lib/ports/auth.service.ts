import {LogIn, Register, User, UserAuth} from '@queroser.dev/shared/util-model'
import {Observable} from 'rxjs'

export abstract class AuthService {
  abstract check(): Observable<UserAuth>
  abstract register(value: Register): Observable<User>
  abstract logIn(value: LogIn): Observable<UserAuth>
  abstract logOut(): Observable<UserAuth>
}
