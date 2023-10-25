import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'stringify',
  pure: true,
})
export class StringifyPipe implements PipeTransform {
  transform(value: unknown) {
    return String(value)
  }
}
