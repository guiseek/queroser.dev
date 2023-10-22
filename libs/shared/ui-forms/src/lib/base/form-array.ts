import {TypedFormControl} from '../types/typed-form'
import {FormArray} from '@angular/forms'

export class FormArrayBase<T> extends FormArray<TypedFormControl<T>> {
  constructor(...controls: TypedFormControl<T>[]) {
    super(controls)
  }
}
