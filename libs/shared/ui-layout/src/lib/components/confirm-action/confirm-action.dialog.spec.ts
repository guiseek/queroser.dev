import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ConfirmActionDialog} from './confirm-action.dialog'
import { ConfirmActionData } from './confirm-action-data'

describe('ConfirmActionDialog', () => {
  let component: ConfirmActionDialog
  let fixture: ComponentFixture<ConfirmActionDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmActionDialog],
      imports: [BrowserAnimationsModule, MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: '',
            infos: [],
          } as ConfirmActionData
        }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ConfirmActionDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
