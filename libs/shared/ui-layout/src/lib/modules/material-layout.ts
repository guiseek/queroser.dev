import {NgModule} from '@angular/core'
import {A11yModule} from '@angular/cdk/a11y'
import {LayoutModule} from '@angular/cdk/layout'
import {MatCardModule} from '@angular/material/card'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs'
import {MatStepperModule} from '@angular/material/stepper'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list'

@NgModule({
  exports: [
    A11yModule,
    LayoutModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatMenuModule,
    MatListModule,
  ],
})
export class MaterialLayoutModule {}
