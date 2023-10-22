import {DevLogoContent} from '@queroser.dev/shared/util-model'
import {Observable} from 'rxjs'

export abstract class DevLogosService {
  abstract findAll(): Observable<DevLogoContent[]>
}
