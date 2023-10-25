import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CreateCourseDialog} from './create-course.dialog'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'

describe('CreateCourseDialog', () => {
  let component: CreateCourseDialog
  let fixture: ComponentFixture<CreateCourseDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCourseDialog],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            categories: []
          }
        }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(CreateCourseDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
