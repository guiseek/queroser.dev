import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CourseDetailsContainer} from './course-details.container'

describe('CourseDetailsContainer', () => {
  let component: CourseDetailsContainer
  let fixture: ComponentFixture<CourseDetailsContainer>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailsContainer],
    }).compileComponents()

    fixture = TestBed.createComponent(CourseDetailsContainer)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
