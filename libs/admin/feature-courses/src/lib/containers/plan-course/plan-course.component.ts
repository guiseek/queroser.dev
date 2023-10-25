import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {CategoryFacade, CourseFacade} from '@queroser.dev/admin/data-access'
import {CreateCourseForm} from '../../forms'
import {FormControl} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'admin-plan-course',
  templateUrl: './plan-course.component.html',
  styleUrls: ['./plan-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCourseComponent implements OnInit {
  form = new CreateCourseForm()

  router = inject(Router)
  destroyRef = inject(DestroyRef)
  courseFacade = inject(CourseFacade)
  categoryFacade = inject(CategoryFacade)

  categories = new FormControl()

  ngOnInit(): void {
    this.categoryFacade.loadAll()
    this.courseFacade.setCourse(null)
    this.courseFacade.course$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((course) => {
        console.log(course)

        if (course) this.router.navigate(['..', course.id])
      })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.getRawValue())
      this.courseFacade.create(this.form.getRawValue())
    }
  }
}
