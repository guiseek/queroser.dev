import {createState} from './create'

export const Store = <T>(initialValue: T) => {
  return class Store {
    #state = createState<T>(initialValue)

    select = this.#state.select
    setState = this.#state.update
    value = this.#state.value
    pick = this.#state.pick
  }
}
