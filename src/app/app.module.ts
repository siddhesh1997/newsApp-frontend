import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { FollowedTopicsComponent } from './followed-topics/followed-topics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // DashboardComponent,
    HomeComponent,
    TopHeadlinesComponent,
    FollowedTopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    /* { provide: APP_INITIALIZER, useFactory: APP_INITIALIZER, multi: true , deps: [AuthService] */ 
    /* {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}, */
    /* UiStyleToggleService,
    AuthGuard, JwtHelperService, */
    /* {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true}, */
   /*  {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '391206573924-2fnhuvapmccb6s6kn5fd9jprntk2ps6o.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
