import {Store} from '@queroser.dev/shared/data-access'
import {Category, CreateCategory} from '@queroser.dev/shared/util-model'
import {CategoryService} from '../ports'
import {take} from 'rxjs'

interface CategoryState {
  category: Category | null
  categories: Category[]
  message: string | null
  count: number
}

const initialValue: CategoryState = {
  category: null,
  categories: [],
  message: null,
  count: 0,
}

export class CategoryFacade extends Store(initialValue) {
  categories$ = this.pick('categories')
  category$ = this.pick('category')
  message$ = this.pick('message')
  count$ = this.pick('count')

  constructor(private categoryService: CategoryService) {
    super()
  }

  loadAll() {
    const categories$ = this.categoryService.findAll().pipe(take(1))
    categories$.subscribe((categories) => {
      this.setState({categories})
    })
  }

  loadOne(id: string) {
    const category$ = this.categoryService.findOne(id).pipe(take(1))
    category$.subscribe((category) => {
      this.setState({category})
    })
  }

  create(value: CreateCategory) {
    const category$ = this.categoryService.create(value).pipe(take(1))
    category$.subscribe((category) => {
      this.setState({category})
      this.loadAll()
    })
  }

  update({id, ...value}: Category) {
    const category$ = this.categoryService.update(id, value).pipe(take(1))
    category$.subscribe((category) => {
      this.setState({category})
      this.loadAll()
    })
  }

  remove(id: string) {
    const category$ = this.categoryService.remove(id).pipe(take(1))
    category$.subscribe((category) => {
      this.setState({category})
      this.loadAll()
    })
  }
}
