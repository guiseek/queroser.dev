import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  HttpClient,
  withInterceptors,
  provideHttpClient,
} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {BrowserModule} from '@angular/platform-browser'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {provideHttp} from '@queroser.dev/shared/data-access'
import {provideAuth} from '@queroser.dev/shared/data-access'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes'
import {authError} from './auth-error'
import {
  provideCourse,
  provideCategory,
  provideIcon,
} from '@queroser.dev/admin/data-access'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([authError])),
    provideHttp(HttpClient),
    provideCategory(),
    provideCourse(),
    provideAuth(),
    provideIcon(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
