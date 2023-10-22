import {inject, Component, ChangeDetectionStrategy} from '@angular/core'
import {CreateCourseData} from '@queroser.dev/shared/util-model'
import {CreateCourseForm, CreateCourseGroup} from '../../forms'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormDialog} from '@queroser.dev/shared/ui-forms'

@Component({
  selector: 'admin-create-course',
  templateUrl: './create-course.dialog.html',
  styleUrls: ['./create-course.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCourseDialog extends FormDialog<CreateCourseGroup> {
  form = new CreateCourseForm()
  data = inject<CreateCourseData>(MAT_DIALOG_DATA)
}
