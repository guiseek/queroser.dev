import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {Course} from '@queroser.dev/shared/util-model'

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({required: true})
  course!: Course

  formatLabel({progress, steps}: Course) {
    return `${progress.currentStep / steps.length}`
  }
}
