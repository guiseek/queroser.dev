import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {SidenavSection} from './sidenav-section'

@Component({
  selector: 'dev-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input({required: true}) sections: SidenavSection[] = []
}
