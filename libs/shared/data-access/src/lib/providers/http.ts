import {Http} from '../ports'
import {HttpService} from '../services'

export const provideHttp = <T>(http: T) => [
  {provide: Http, useClass: http},
  {provide: HttpService, deps: [Http]},
]
