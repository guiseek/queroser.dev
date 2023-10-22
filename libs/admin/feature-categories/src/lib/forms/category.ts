import {TypedFormGroupBase} from '@queroser.dev/shared/ui-forms'
import {Category} from '@queroser.dev/shared/util-model'
import {FormControl, Validators} from '@angular/forms'

export class CategoryForm extends TypedFormGroupBase<Category> {
  constructor() {
    super({
      id: new FormControl(),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
        updateOn: 'submit',
      }),
    })
  }
}
