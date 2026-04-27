import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/demo/commonServices/auth.interceptor';
import { serverErrorInterceptor } from './app/demo/commonServices/server-error.interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([authInterceptor, serverErrorInterceptor])), importProvidersFrom(BrowserModule, AppRoutingModule)]
}).catch((err) => console.error(err));
