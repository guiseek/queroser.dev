import {TypedForm} from '../types/typed-form'
import {AbstractControl, FormGroup} from '@angular/forms'
import {Subject} from 'rxjs'

export class FormGroupBase<
  T extends Record<string, AbstractControl>
> extends FormGroup<T> {
  #submitted = new Subject<T>()
  submitted$ = this.#submitted.asObservable()

  submit() {
    if (this.valid) {
      this.#submitted.next(this.getRawValue() as T)
    } else {
      this.markAllAsTouched()
    }
  }
}

export class TypedFormGroupBase<T> extends FormGroupBase<TypedForm<T>> {
  constructor(controls: TypedForm<T>) {
    super(controls)
  }
}
