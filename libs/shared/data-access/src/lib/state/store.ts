import {HttpError} from '@queroser.dev/shared/util-model'
import {createState} from './create'
import {Observable} from 'rxjs'

export const Store = <T>(initialValue: T) => {
  return class Store {
    #state = createState<T>(initialValue)

    select = this.#state.select
    setState = this.#state.setState
    value = this.#state.value
    pick = this.#state.pick

    handleError = <T>(err: HttpError, caught: Observable<T>) => {
      if (err) {
        console.log(err)
        const {message} = err.error
        this.setState({ message } as any)
        throw err
      }

      return caught
    }
  }
}
