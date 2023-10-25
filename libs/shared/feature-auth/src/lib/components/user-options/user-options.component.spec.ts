import {sharedFeatureAuthOptionsDefault} from '../../shared-feature-auth.options'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {UserOptionsComponent} from './user-options.component'
import {RouterTestingModule} from '@angular/router/testing'
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'
import {MatListModule} from '@angular/material/list'
import {UserAuth} from '@queroser.dev/shared/util-model'
import {CommonModule} from '@angular/common'
import { UserRolesPipe } from '../../pipes/user-roles.pipe'

const USER_AUTH_MOCK: UserAuth = {
  firstName: 'Gui',
  lastName: 'Seek',
  email: 'guiseek@gmail.com',
  roles: ['user'],
}

const OPTIONS_MOCK = USER_AUTH_MOCK.roles
  .map((role) => sharedFeatureAuthOptionsDefault[role])
  .flat()

describe('UserOptionsComponent', () => {
  let component: UserOptionsComponent
  let fixture: ComponentFixture<UserOptionsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOptionsComponent, UserRolesPipe],
      imports: [
        CommonModule,
        RouterTestingModule,
        MatBottomSheetModule,
        MatListModule,
      ],
      providers: [
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: {
            user: USER_AUTH_MOCK,
            options: OPTIONS_MOCK,
          },
        },
        {
          provide: MatBottomSheetRef,
          useValue: {
            dismiss() {
              return
            },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(UserOptionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
