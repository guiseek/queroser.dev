import {Store} from '@queroser.dev/shared/data-access'
import {DevLogosService} from '../ports'
import {map, take} from 'rxjs'

interface IconState {
  icons: string[]
}

const initialValue: IconState = {
  icons: [],
}

export class IconFacade extends Store(initialValue) {
  icons$ = this.pick('icons')

  constructor(private readonly devLogosService: DevLogosService) {
    super()
  }

  loadIcons() {
    const icons$ = this.devLogosService.findAll().pipe(take(1))
    icons$
      .pipe(
        map((icons) =>
          icons
            .map((icon) => icon.download_url)
            .filter((icon) => icon.endsWith('.svg'))
        )
      )
      .subscribe((icons) => this.setState({icons}))
  }
}
