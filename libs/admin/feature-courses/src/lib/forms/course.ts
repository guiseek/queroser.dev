import {FormArrayBase, FormGroupBase} from '@queroser.dev/shared/ui-forms'
import {CourseStep, UpdateCourse} from '@queroser.dev/shared/util-model'
import {FormControl, Validators} from '@angular/forms'
import {CourseStepForm} from './course-step'

export class CourseStepsForm extends FormArrayBase<CourseStep> {}
export class CourseForm extends FormGroupBase<UpdateCourse> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
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
      steps: new CourseStepsForm(),
    })
  }

  get steps() {
    return this.controls.steps as CourseStepsForm
  }

  addStep(value?: CourseStep, emitEvent = true) {
    this.steps.push(new CourseStepForm(value), {emitEvent})
  }

  removeStep(index: number, emitEvent = true) {
    this.steps.removeAt(index, {emitEvent})
  }
}
