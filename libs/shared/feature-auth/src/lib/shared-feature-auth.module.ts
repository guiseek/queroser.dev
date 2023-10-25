import {NgModule} from '@angular/core'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {
  MaterialFormModule,
  MaterialLayoutModule,
} from '@queroser.dev/shared/ui-layout'
import {
  SharedFeatureAuthOptions,
  SHARED_FEATURE_AUTH_OPTIONS,
  sharedFeatureAuthOptionsDefault,
} from './shared-feature-auth.options'
import {
  LogInComponent,
  RegisterComponent,
  UserOptionsComponent,
} from './components'
import {UserRolesPipe} from './pipes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule,
    MaterialFormModule,
    MaterialLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegisterComponent,
    LogInComponent,
    UserOptionsComponent,
    UserRolesPipe,
  ],
  exports: [
    RegisterComponent,
    LogInComponent,
    UserOptionsComponent,
    UserRolesPipe,
  ],
  providers: [
    {
      provide: SHARED_FEATURE_AUTH_OPTIONS,
      useValue: sharedFeatureAuthOptionsDefault,
    },
  ],
})
export class SharedFeatureAuthModule {
  
  static forRoot(options: SharedFeatureAuthOptions) {
    return {
      ngModule: SharedFeatureAuthModule,
      providers: [
        {
          provide: SHARED_FEATURE_AUTH_OPTIONS,
          useValue: {...sharedFeatureAuthOptionsDefault, ...options},
        },
      ],
    }
  }
}
