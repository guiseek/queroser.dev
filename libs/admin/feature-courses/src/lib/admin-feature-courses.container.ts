import {inject, Component, ChangeDetectionStrategy} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {CategoryFacade, CourseFacade} from '@queroser.dev/admin/data-access'
import {CreateCourseDialog} from './components'
import {take} from 'rxjs'

@Component({
  selector: 'admin-feature-courses',
  templateUrl: './admin-feature-courses.container.html',
  styleUrls: ['./admin-feature-courses.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureCoursesContainer {
  categoryFacade = inject(CategoryFacade)
  courseFacade = inject(CourseFacade)
  #dialog = inject(MatDialog)

  onCreateCourse() {
    const categories$ = this.categoryFacade.categories$
    categories$.pipe(take(2)).subscribe((categories) => {
      if (categories.length) {
        const data = {categories}
        console.log(data)

        const result$ = this.#dialog.open(CreateCourseDialog, {data})

        result$
          .afterClosed()
          .pipe(take(1))
          .subscribe((course) => {
            if (course) this.courseFacade.create(course)
          })
      } else {
        this.categoryFacade.loadAll()
      }
    })
  }
}
