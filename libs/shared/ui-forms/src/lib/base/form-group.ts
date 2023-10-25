import {TypedForm, TypedFormGroup} from '../types/typed-form'
import {FormGroup} from '@angular/forms'
import {Subject} from 'rxjs'

export class FormGroupBase<T extends object> extends FormGroup<
  TypedFormGroup<T>
> {
  #submitted = new Subject<T>()
  submitted$ = this.#submitted.asObservable()

  getValue() {
    return this.getRawValue() as T
  }

  submit() {
    if (this.valid) {
      this.#submitted.next(this.getRawValue() as T)
    } else {
      this.markAllAsTouched()
    }
  }
}

export class TypedFormGroupBase<T extends object> extends FormGroupBase<T> {
  constructor(controls: TypedForm<T>) {
    super(controls)
  }
}
