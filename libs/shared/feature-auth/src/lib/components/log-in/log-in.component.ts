import {LogIn} from '@queroser.dev/shared/util-model'
import {LogInForm} from '../../forms'
import {
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'auth-log-in',
  templateUrl: './log-in.component.html',
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
export class LogInComponent {
  form = new LogInForm()

  @ViewChild('autofocus')
  inputRef?: ElementRef<HTMLInputElement>

  @Output() logInChange = new EventEmitter<LogIn>()

  focus() {
    if (this.inputRef) {
      this.inputRef.nativeElement.focus()
    }
  }

  onSubmit() {
    if (this.form.valid) {
      return this.logInChange.emit(this.form.getRawValue())
    }

    this.form.markAllAsTouched()
  }
}
