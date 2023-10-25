import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatChipsModule} from '@angular/material/chips'
import {MatIconModule} from '@angular/material/icon'
import {CardComponent} from './components/card/card.component'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {StringifyPipe} from './pipes/stringify.pipe'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
  ],
  declarations: [CardComponent, StringifyPipe],
  exports: [CardComponent, StringifyPipe],
})
export class SharedFeatureCourseModule {}
