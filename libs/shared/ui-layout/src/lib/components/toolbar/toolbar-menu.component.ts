import {UserAuth, hasRole} from '@queroser.dev/shared/util-model'
import {
  Input,
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'dev-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarMenuComponent {
  _user: UserAuth | null = null

  isLearner = false
  isAdmin = false
  isUser = false

  @Output() logOut = new EventEmitter<void>()

  @Input({required: true})
  set user(user) {
    this._user = user
    this.#handleRoles(user)
  }
  get user() {
    return this._user
  }

  #handleRoles(user: UserAuth | null) {
    this.isLearner = user ? hasRole(user, 'learner') : false
    this.isAdmin = user ? hasRole(user, 'admin') : false
    this.isUser = user ? hasRole(user, 'user') : false
  }
}
