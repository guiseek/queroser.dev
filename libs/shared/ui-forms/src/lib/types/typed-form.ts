import {FormArray, FormControl, FormGroup} from '@angular/forms'

type DetectTypedForm<T> = T extends Array<infer U>
  ? FormArray<DetectTypedForm<U>> | FormControl<DetectTypedForm<U[]>>
  : T extends Date
  ? FormControl<Date>
  : T extends object
  ? FormGroup<TypedForm<T>>
  : T extends true | false
  ? FormControl<boolean>
  : T extends PropertyKey
  ? FormControl<T>
  : T extends null
  ? FormControl<T | null>
  : FormControl<unknown>

export type TypedFormGroup<T extends object> = {
  [K in keyof T]: DetectTypedForm<T[K]>
}

export type TypedFormControl<T> = DetectTypedForm<T>

export type TypedForm<T> = {
  [K in keyof T]: DetectTypedForm<T[K]>
}
