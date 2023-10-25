import {BehaviorSubject, distinctUntilChanged, map} from 'rxjs'

export const createState = <T>(initialValue: T) => {
  const initialState = Object.freeze(initialValue)
  const state = new BehaviorSubject<T>(initialState)

  const select = <K>(mapFn: (state: T) => K) => {
    return state.asObservable().pipe(
      map((state) => mapFn(state)),
      distinctUntilChanged()
    )
  }

  const pick = <K extends keyof T>(key: K) => {
    return state.asObservable().pipe(
      map((state) => state[key]),
      distinctUntilChanged()
    )
  }

  const setState = (newState: Partial<T>) => {
    state.next({...state.value, ...newState})
  }

  const value = () => state.getValue()

  return {select, pick, setState, value}
}
