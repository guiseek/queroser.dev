import {AuthFacade} from '@queroser.dev/shared/data-access'
import {Component, inject} from '@angular/core'

@Component({
  selector: 'learner-feature-shell',
  templateUrl: './learner-feature-shell.container.html',
  styleUrls: ['./learner-feature-shell.container.scss'],
})
export class LearnerFeatureShellContainer {
  authFacade = inject(AuthFacade)

  sections = [
    {
      heading: 'Front-end',
      expanded: true,
      children: [
        {
          title: 'HTML',
          path: ['/', 'front-end', 'html'],
        },
        {
          title: 'CSS',
          path: ['/', 'front-end', 'css'],
        },
        {
          title: 'JavaScript',
          path: ['/', 'front-end', 'javascript'],
        },
        {
          title: 'TypeScript',
          path: ['/', 'front-end', 'typescript'],
        },
        {
          title: 'Web APIs',
          path: ['/', 'front-end', 'Web APIs'],
        },
        {
          title: 'Angular',
          path: ['/', 'front-end', 'angular'],
        },
      ],
    },
    {
      heading: 'Back-end',
      expanded: true,
      children: [
        {
          title: 'NodeJS',
          path: ['/', 'back-end', 'nodejs-typescript'],
        },
        {
          title: 'Python',
          path: ['/', 'back-end', 'python'],
        },
        {
          title: 'NestJS',
          path: ['/', 'back-end', 'nestjs'],
        },
      ],
    },
  ]
}
