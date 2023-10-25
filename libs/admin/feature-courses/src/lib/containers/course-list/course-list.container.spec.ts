import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CourseListContainer} from './course-list.container'
import { ConfirmActionModule } from '@queroser.dev/shared/ui-layout'
import { provideCourse } from '@queroser.dev/admin/data-access'
import { Http } from '@queroser.dev/shared/data-access'
import { MatExpansionModule } from '@angular/material/expansion'
import { of } from 'rxjs'

describe('CourseListContainer', () => {
  let component: CourseListContainer
  let fixture: ComponentFixture<CourseListContainer>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseListContainer
      ],
      imports: [
        MatExpansionModule,
        ConfirmActionModule,
      ],
      providers: [
        {
          provide: Http,
          useValue: {
            get: jest.fn().mockImplementation(of),
            post: jest.fn().mockImplementation(of),
            put: jest.fn().mockImplementation(of),
            delete: jest.fn().mockImplementation(of),
          }
        },
        provideCourse()
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(CourseListContainer)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
