import {TypedFormGroupBase} from '@queroser.dev/shared/ui-forms'
import {FormControl, Validators} from '@angular/forms'
import {Register} from '@queroser.dev/shared/util-model'

export class RegisterForm extends TypedFormGroupBase<Register> {
  constructor() {
    super({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
