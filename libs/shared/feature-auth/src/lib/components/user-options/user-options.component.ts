import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {UserOptionsData} from '@queroser.dev/shared/util-model'
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet'

@Component({
  selector: 'auth-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOptionsComponent {
  data = inject<UserOptionsData>(MAT_BOTTOM_SHEET_DATA)
  #ref = inject<MatBottomSheetRef<UserOptionsComponent>>(MatBottomSheetRef)

  openLink(event: MouseEvent) {
    this.#ref.dismiss()
    event.preventDefault()
  }
}
