import {Http} from '../ports'

export const provideHttp = <T>(http: T) => ({provide: Http, useClass: http})
