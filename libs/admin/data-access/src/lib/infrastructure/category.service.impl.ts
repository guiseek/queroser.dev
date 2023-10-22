import {Category, CreateCategory} from '@queroser.dev/shared/util-model'
import {Http} from '@queroser.dev/shared/data-access'
import {CategoryService} from '../ports'

export class CategoryServiceImpl implements CategoryService {
  constructor(private http: Http) {}

  findAll() {
    return this.http.get<Category[]>('/api/categories')
  }

  findOne(id: string) {
    return this.http.get<Category>('/api/categories/' + id)
  }

  create(value: CreateCategory) {
    return this.http.post<Category>('/api/categories', value)
  }

  update(id: string, value: Partial<Category>) {
    return this.http.put<Category>('/api/categories/' + id, value)
  }

  remove(id: string) {
    return this.http.delete<Category>('/api/categories/' + id)
  }
}
