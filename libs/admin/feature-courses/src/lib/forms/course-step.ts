import {FormControl, Validators} from '@angular/forms'
import {FormGroupBase} from '@queroser.dev/shared/ui-forms'
import {CourseStep} from '@queroser.dev/shared/util-model'

export class CourseStepForm extends FormGroupBase<CourseStep> {
  constructor(value?: CourseStep) {
    super({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      subtitle: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      content: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      order: new FormControl(0, {
        nonNullable: true,
      }),
    })

    if (value) {
      this.patchValue(value)
    }
  }
}
