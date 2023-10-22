import {BehaviorSubject} from 'rxjs'

export class DrawerShellService<T = unknown> {
  #opened = new BehaviorSubject(true)
  opened$ = this.#opened.asObservable()

  #items = new BehaviorSubject<T[]>([])
  items$ = this.#items.asObservable()
  set items(items: T[]) {
    this.#items.next(items)
  }

  toggled() {
    this.#opened.next(!this.#opened.value)
  }
}
