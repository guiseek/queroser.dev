import {DevLogoContent} from '@queroser.dev/shared/util-model'
import {Http} from '@queroser.dev/shared/data-access'
import {DevLogosService} from '../ports'

export class DevLogosServiceImpl implements DevLogosService {
  #api = `https://api.github.com/repos/guiseek/dev-logos.svg/contents`
  constructor(private http: Http) {}

  findAll() {
    return this.http.get<DevLogoContent[]>(this.#api)
  }
}
