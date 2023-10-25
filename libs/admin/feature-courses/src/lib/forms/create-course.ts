import {FormControl, Validators} from '@angular/forms'
import {FormGroupBase} from '@queroser.dev/shared/ui-forms'
import {CreateCourse} from '@queroser.dev/shared/util-model'

export class CreateCourseForm extends FormGroupBase<CreateCourse> {
  constructor() {
    super({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      intro: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(400)],
      }),
      icon: new FormControl('', {
        nonNullable: true,
      }),
      categories: new FormControl('', {
        nonNullable: true,
      }),
    })
  }
}
