import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {A11yModule} from '@angular/cdk/a11y'
import {MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {ConfirmActionDialog} from './confirm-action.dialog'
import {ConfirmActionService} from './confirm-action.service'

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [ConfirmActionDialog],
  providers: [ConfirmActionService],
})
export class ConfirmActionModule {}
