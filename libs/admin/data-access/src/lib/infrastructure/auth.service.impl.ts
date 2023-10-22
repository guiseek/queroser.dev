import {LogIn, Register, User, UserAuth} from '@queroser.dev/shared/util-model'
import {Http} from '@queroser.dev/shared/data-access'
import {AuthService} from '../ports'

export class AuthServiceImpl implements AuthService {
  constructor(private http: Http) {}

  check() {
    return this.http.get<UserAuth>('/api/auth')
  }

  logIn(value: LogIn) {
    return this.http.post<UserAuth>('/api/auth/log-in', value)
  }

  logOut() {
    return this.http.post<UserAuth>('/api/auth/log-out', {})
  }

  register(value: Register) {
    return this.http.post<User>('/api/auth/register', value)
  }
}
