import {
  inject,
  OnInit,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core'
import {LogInComponent, RegisterComponent} from './components'
import {AuthFacade} from '@queroser.dev/admin/data-access'
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
    // this.facade.check().subscribe()

    this.facade.action$.pipe(takeUntil(this.destroy)).subscribe((action) => {
      if (action === 'login') {
        this.onSelectedIndexChange(0)
      }
    })

    this.facade.user$.pipe(takeUntil(this.destroy)).subscribe((user) => {
      if (user) {
        this.destroy.next()
        this.destroy.complete()

        console.log(user);
        

        this.router.navigate(['/', 'admin', 'cursos'])
      }
    })
  }

  onSelectedIndexChange(index: number) {
    console.log(index)

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
