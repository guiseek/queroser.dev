import {AbstractControl, FormControl, Validators} from '@angular/forms'
import {FormGroupBase} from '@queroser.dev/shared/ui-forms'

export interface CreateCourseGroup extends Record<string, AbstractControl> {
  title: FormControl<string>
  intro: FormControl<string>
  icon: FormControl<string | undefined>
  categories: FormControl<string[]>
}

export class CreateCourseForm extends FormGroupBase<CreateCourseGroup> {
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
      categories: new FormControl([''], {
        nonNullable: true,
      }),
    })
  }
}
