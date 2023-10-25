import {TypedFormGroupBase} from './form-group'
import {of} from 'rxjs'

export abstract class FormDialog<T extends object> {
  abstract form: TypedFormGroupBase<T>

  message$ = of<string | null>(null)
}
