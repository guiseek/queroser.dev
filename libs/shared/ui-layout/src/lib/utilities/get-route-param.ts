import {ActivatedRoute} from '@angular/router'
import {inject} from '@angular/core'
import {filter, map} from 'rxjs'

export const getRouteParam = (name: string) => {
  return inject(ActivatedRoute).paramMap.pipe(
    filter((param) => param.has(name)),
    map((param) => param.get(name))
  )
}
