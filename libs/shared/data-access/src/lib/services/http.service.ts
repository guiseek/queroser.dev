import {Http, RequestConfig} from '../ports'

export class HttpService<T> {
  constructor(private http: Http<T>, readonly api = '') {}

  get<R>(url: string, options: Partial<RequestConfig> = {}) {
    return this.http.get<R>(this.api + url, options)
  }

  post<R, D>(url: string, data: D, options: Partial<RequestConfig> = {}) {
    return this.http.post<R, D>(this.api + url, data, options)
  }

  put<R, D>(url: string, data: D, options: Partial<RequestConfig> = {}) {
    return this.http.put<R, D>(this.api + url, data, options)
  }

  delete<R, D>(url: string, data: D, options: Partial<RequestConfig> = {}) {
    return this.http.delete<R, D>(this.api + url, data, options)
  }
}
