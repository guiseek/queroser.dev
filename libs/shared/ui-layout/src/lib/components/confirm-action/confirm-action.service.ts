import {ThemePalette} from '@angular/material/core'
import {MatDialog} from '@angular/material/dialog'
import {Injectable, inject} from '@angular/core'
import {ConfirmActionDialog} from './confirm-action.dialog'
import {
  ConfirmActionData,
  ConfirmActionDataInjected,
} from './confirm-action-data'

@Injectable()
export class ConfirmActionService {
  #dialog = inject(MatDialog)

  open(data: ConfirmActionData, color?: ThemePalette) {
    return this.#openDialog({...data, color})
  }

  #openDialog<D extends ConfirmActionDataInjected>(data: D) {
    return this.#dialog.open<ConfirmActionDialog, D, boolean>(
      ConfirmActionDialog,
      {data}
    )
  }
}
