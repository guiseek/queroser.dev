import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {SidenavSection} from './sidenav-section'

@Component({
  selector: 'dev-sidenav-section',
  templateUrl: './sidenav-section.component.html',
  styleUrls: ['./sidenav-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavSectionComponent {
  @Input({required: true}) section?: SidenavSection
}
