import {CategoryFacade, CourseFacade} from '@queroser.dev/admin/data-access'
import {Component, OnInit, inject} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {CourseForm} from '../../forms'

@Component({
  selector: 'admin-course-details',
  templateUrl: './course-details.container.html',
  styleUrls: ['./course-details.container.scss'],
})
export class CourseDetailsContainer implements OnInit {
  courseFacade = inject(CourseFacade)
  categoryFacade = inject(CategoryFacade)
  activatedRoute = inject(ActivatedRoute)

  form = new CourseForm()

  ngOnInit() {
    const {course} = this.activatedRoute.snapshot.data
    if (course) {
      this.form.patchValue(course)
    }
  }

  addStep() {
    this.form.addStep()
  }

  onSubmit() {
    if (this.form.valid) {
      this.courseFacade.update(this.form.getValue())
    }
  }
}
