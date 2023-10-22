import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CreateCourseDialog} from './create-course.dialog'

describe('CreateCourseDialog', () => {
  let component: CreateCourseDialog
  let fixture: ComponentFixture<CreateCourseDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCourseDialog],
    }).compileComponents()

    fixture = TestBed.createComponent(CreateCourseDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
