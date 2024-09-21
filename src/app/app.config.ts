import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SearchMockInterceptor } from './interceptor/search.mock.interceptor';

const developmentInterceptors = [SearchMockInterceptor];
const interceptors: any[] = [];
const production = false;
let finalInterceptors = [...interceptors];
if (!production) {
  finalInterceptors = [...interceptors, ...developmentInterceptors];
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors(finalInterceptors)),]
};
