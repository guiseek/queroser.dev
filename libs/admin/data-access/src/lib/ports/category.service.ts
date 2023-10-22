import {Category, CreateCategory} from '@queroser.dev/shared/util-model'
import {Observable} from 'rxjs'

export abstract class CategoryService {
  abstract findAll(): Observable<Category[]>
  abstract findOne(id: string): Observable<Category>
  abstract create(value: CreateCategory): Observable<Category>
  abstract update(id: string, value: Partial<Category>): Observable<Category>
  abstract remove(id: string): Observable<Category>
}
