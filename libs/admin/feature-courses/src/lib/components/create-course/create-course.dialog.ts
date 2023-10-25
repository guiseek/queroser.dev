import {CreateCourse, CreateCourseData} from '@queroser.dev/shared/util-model'
import {inject, Component, ChangeDetectionStrategy} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormDialog} from '@queroser.dev/shared/ui-forms'
import {CreateCourseForm} from '../../forms'

@Component({
  selector: 'admin-create-course',
  templateUrl: './create-course.dialog.html',
  styleUrls: ['./create-course.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCourseDialog extends FormDialog<CreateCourse> {
  form = new CreateCourseForm()
  data = inject<CreateCourseData>(MAT_DIALOG_DATA)
}
