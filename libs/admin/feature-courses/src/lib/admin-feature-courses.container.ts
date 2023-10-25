import {CategoryFacade, CourseFacade} from '@queroser.dev/admin/data-access'
import {inject, Component, ChangeDetectionStrategy} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'admin-feature-courses',
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 16px;
      }
    `,
  ],
})
export class AdminFeatureCoursesContainer {
  categoryFacade = inject(CategoryFacade)
  courseFacade = inject(CourseFacade)
  #dialog = inject(MatDialog)
}
