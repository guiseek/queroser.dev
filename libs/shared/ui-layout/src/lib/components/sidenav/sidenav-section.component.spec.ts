import {ComponentFixture, TestBed} from '@angular/core/testing'
import {SidenavSectionComponent} from './sidenav-section.component'

describe('SidenavSectionComponent', () => {
  let component: SidenavSectionComponent
  let fixture: ComponentFixture<SidenavSectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavSectionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SidenavSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
