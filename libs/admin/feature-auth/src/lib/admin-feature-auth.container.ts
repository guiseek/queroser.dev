import {
  inject,
  OnInit,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  LogInComponent,
  RegisterComponent,
} from '@queroser.dev/shared/feature-auth'
import {hasRole} from '@queroser.dev/shared/util-model'
import {AuthFacade} from '@queroser.dev/shared/data-access'
import {BehaviorSubject, Subject, takeUntil} from 'rxjs'
import {FormGroup} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'admin-feature-auth',
  templateUrl: './admin-feature-auth.container.html',
  styleUrls: ['./admin-feature-auth.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureAdminContainer implements OnInit {
  @ViewChild(LogInComponent)
  logInComponent?: LogInComponent

  @ViewChild(RegisterComponent)
  registerComponent?: RegisterComponent

  #tabIndex = new BehaviorSubject(0)
  tabIndex$ = this.#tabIndex.asObservable()

  form = new FormGroup({})

  router = inject(Router)
  facade = inject(AuthFacade)
  destroy = new Subject<void>()

  ngOnInit() {
    const user$ = this.facade.user$.pipe(takeUntil(this.destroy))
    const action$ = this.facade.action$.pipe(takeUntil(this.destroy))

    user$.subscribe((user) => {
      if (user) {
        let initialRoute = '/'

        if (hasRole(user, 'admin')) {
          initialRoute = '/admin'
        } else if (hasRole(user, 'learner')) {
          initialRoute = '/aprenda'
        }

        this.destroy.next()
        this.destroy.complete()
        this.router.navigate([initialRoute])
      }
    })

    action$.subscribe((action) => {
      if (action === 'login') {
        this.onSelectedIndexChange(0)
      }
    })
  }

  onSelectedIndexChange(index: number) {
    this.#tabIndex.next(index)
  }

  onTabChanged() {
    if (this.#tabIndex.value) {
      this.registerComponent?.focus()
    } else {
      this.logInComponent?.focus()
    }
  }
}
