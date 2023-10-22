import {TypedFormGroupBase} from '@queroser.dev/shared/ui-forms'
import {FormControl, Validators} from '@angular/forms'
import {LogIn} from '@queroser.dev/shared/util-model'

export class LogInForm extends TypedFormGroupBase<LogIn> {
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
    })
  }
}
