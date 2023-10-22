import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {ConfirmActionDataInjected} from './confirm-action-data'

@Component({
  selector: 'dev-confirm-action',
  templateUrl: './confirm-action.dialog.html',
  styleUrls: ['./confirm-action.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmActionDialog {
  data = inject<ConfirmActionDataInjected>(MAT_DIALOG_DATA)
}
