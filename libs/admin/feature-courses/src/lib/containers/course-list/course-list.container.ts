import {
  inject,
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import {ConfirmActionService} from '@queroser.dev/shared/ui-layout'
import {CourseFacade} from '@queroser.dev/admin/data-access'
import {Course} from '@queroser.dev/shared/util-model'
import {take} from 'rxjs'

export class CourseDataSource extends MatTableDataSource<Course> {}

@Component({
  selector: 'admin-course-list',
  templateUrl: './course-list.container.html',
  styleUrls: ['./course-list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListContainer implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator?: MatPaginator

  @ViewChild(MatSort)
  sort?: MatSort

  #confirm = inject(ConfirmActionService)

  courseFacade = inject(CourseFacade)

  displayedColumns = ['title', 'actions']

  dataSource = new CourseDataSource()

  ngAfterViewInit() {
    this.courseFacade.results$.subscribe((results) => {
      if (this.paginator) this.dataSource.paginator = this.paginator
      if (this.sort) this.dataSource.sort = this.sort
      this.dataSource.data = results
    })

    this.courseFacade.loadAll()
  }

  onRemove(value: Course) {
    const configConfirm = {
      title: `Remover o curso ${value.title}?`,
      icon: 'warning',
      infos: [
        'Ao remover este curso, ele será apagado do banco de dados e esta ação não poderá ser desfeita.',
        'Sabendo disso, deseja continuar com a ação?',
      ],
    }

    const confirm$ = this.#confirm
      .open(configConfirm, 'warn')
      .afterClosed()
      .pipe(take(1))

    confirm$.subscribe((confirmation) => {
      if (confirmation) this.courseFacade.remove(value.id)
    })
  }
}
