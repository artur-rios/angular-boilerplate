import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from '@app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '@app/core/interceptors/error.interceptor';
import { headerInterceptor } from '@app/core/interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorInterceptor, headerInterceptor])),
    provideRouter(routes),
  ],
};
