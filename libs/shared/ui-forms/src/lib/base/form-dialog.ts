import {AbstractControl} from '@angular/forms'
import {FormGroupBase} from './form-group'
import {of} from 'rxjs'

export abstract class FormDialog<T extends Record<string, AbstractControl>> {
  abstract form: FormGroupBase<T>

  message$ = of<string[] | null>(null)
}
