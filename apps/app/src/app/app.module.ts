import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  HttpClient,
  withInterceptors,
  provideHttpClient,
} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {BrowserModule} from '@angular/platform-browser'
import {provideHttp} from '@queroser.dev/shared/data-access'
import {authInterceptor} from './auth.interceptor'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes'
import {
  provideAuth,
  provideCourse,
  provideCategory,
  provideIcon,
} from '@queroser.dev/admin/data-access'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttp(HttpClient),
    provideCategory(),
    provideCourse(),
    provideAuth(),
    provideIcon(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
