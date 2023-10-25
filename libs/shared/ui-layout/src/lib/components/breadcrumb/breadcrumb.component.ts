import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'dev-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  constructor(readonly service: BreadcrumbService) {}
}
