import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router'
import {BehaviorSubject, filter} from 'rxjs'
import {Injectable} from '@angular/core'
import {Breadcrumb} from './breadcrumb'

@Injectable()
export class BreadcrumbService {
  #breadcrumbs = new BehaviorSubject<Breadcrumb[]>([])
  breadcrumbs$ = this.#breadcrumbs.asObservable()

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const {root} = this.router.routerState.snapshot
        const breadcrumbs: Breadcrumb[] = []

        this.#addBreadcrumb([], breadcrumbs, root)
        this.#breadcrumbs.next(breadcrumbs)
      })
  }

  #addBreadcrumb(
    parentUrl: string[],
    breadcrumbs: Breadcrumb[],
    route: ActivatedRouteSnapshot | null
  ) {
    if (route) {
      const url = parentUrl.concat(route.url.map((url) => url.path))

      if ('breadcrumb' in route.data) {
        const label =
          typeof route.data['breadcrumb'] === 'function'
            ? route.data['breadcrumb'](route.data)
            : route.data['breadcrumb']

        const path = '/' + url.join('/')

        breadcrumbs.push({label, path})
      }

      this.#addBreadcrumb(url, breadcrumbs, route.firstChild)
    }
  }
}
