import {LogIn} from '@queroser.dev/shared/util-model'
import {LogInForm} from '../../forms'
import {
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'admin-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent implements AfterViewInit {
  form = new LogInForm()

  @ViewChild('autofocus', {static: true})
  inputRef?: ElementRef<HTMLInputElement>

  @Output() logInChange = new EventEmitter<LogIn>()

  ngAfterViewInit() {
    this.focus()
  }

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
