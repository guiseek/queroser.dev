import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {RegisterComponent} from './register.component'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(RegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
