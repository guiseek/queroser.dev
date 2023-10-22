import {
  OnInit,
  inject,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core'
import {CategoryFacade} from '@queroser.dev/admin/data-access'
import {CategoryForm} from './forms'
import {Category} from '@queroser.dev/shared/util-model'
import {ConfirmActionService} from '@queroser.dev/shared/ui-layout'
import {take} from 'rxjs'
import {FormGroupDirective} from '@angular/forms'

@Component({
  selector: 'admin-feature-categories',
  templateUrl: './admin-feature-categories.container.html',
  styleUrls: ['./admin-feature-categories.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureCategoriesContainer implements OnInit {
  @ViewChild(FormGroupDirective)
  formGroup?: FormGroupDirective

  facade = inject(CategoryFacade)

  #confirm = inject(ConfirmActionService)

  form = new CategoryForm()

  ngOnInit() {
    this.facade.loadAll()
  }

  onSubmit() {
    if (this.form.valid) {
      this.#saveCategory(this.form.getRawValue())

      if (this.formGroup) {
        return this.formGroup.resetForm()
      }
    }

    this.form.markAllAsTouched()
  }

  #saveCategory(value: Category) {
    if (value.id) {
      this.facade.update(value)
    } else {
      this.facade.create(value)
    }
  }

  onEdit(value: Category) {
    this.form.patchValue(value)
  }

  onRemove(value: Category) {
    const configConfirm = {
      title: `Remover categoria ${value.name}?`,
      icon: 'warning',
      infos: [
        'Ao remover esta categoria, os itens que estão relacionados a ela não terão mais sua referência. Portanto não poderão mais serem encontrados utilizando o filtro por esta categoria.',
        'Sabendo disso, deseja continuar com a ação?',
      ],
    }

    const confirm$ = this.#confirm
      .open(configConfirm, 'warn')
      .afterClosed()
      .pipe(take(1))

    confirm$.subscribe((confirmation) => {
      if (confirmation) this.facade.remove(value.id)
    })
  }
}
