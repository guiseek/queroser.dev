import {DrawerShellService} from './drawer-shell.service'
import {MatDrawerMode} from '@angular/material/sidenav'
import {
  Input,
  OnInit,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'dev-drawer-shell',
  templateUrl: './drawer-shell.component.html',
  styleUrls: ['./drawer-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerShellComponent implements OnInit {
  @Input() hasBackdrop = true

  @Input() mode: MatDrawerMode = 'push'

  service = inject(DrawerShellService)

  ngOnInit() {
    console.log(this.service)
  }
}
