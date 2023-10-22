import {
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {RegisterForm} from '../../forms'
import {Register} from '@queroser.dev/shared/util-model'

@Component({
  selector: 'admin-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements AfterViewInit {
  form = new RegisterForm()
  
  @ViewChild('autofocus', {static: true})
  inputRef?: ElementRef<HTMLInputElement>


  @Output() registerChange = new EventEmitter<Register>()

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
      return this.registerChange.emit(this.form.getRawValue())
    }

    this.form.markAllAsTouched()
  }
}
