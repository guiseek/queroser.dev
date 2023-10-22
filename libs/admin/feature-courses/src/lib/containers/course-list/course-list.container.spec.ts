import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CourseListContainer} from './course-list.container'

describe('CourseListContainer', () => {
  let component: CourseListContainer
  let fixture: ComponentFixture<CourseListContainer>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListContainer],
    }).compileComponents()

    fixture = TestBed.createComponent(CourseListContainer)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
