import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {LogInComponent} from './log-in.component'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

describe('LogInComponent', () => {
  let component: LogInComponent
  let fixture: ComponentFixture<LogInComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(LogInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
