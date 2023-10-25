import {Register} from '@queroser.dev/shared/util-model'
import {RegisterForm} from '../../forms'
import {
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        padding: 8px 8px 0;
      }
    `,
  ],
})
export class RegisterComponent {
  form = new RegisterForm()

  @ViewChild('autofocus', {static: true})
  inputRef?: ElementRef<HTMLInputElement>

  @Output() registerChange = new EventEmitter<Register>()

  focus() {
    if (this.inputRef) {
      this.inputRef.nativeElement.focus()
    }
  }

  onSubmit() {
    if (this.form.valid) {
      return this.registerChange.emit(this.form.getRawValue())
    }

    this.form.markAllAsTouched()
  }
}
