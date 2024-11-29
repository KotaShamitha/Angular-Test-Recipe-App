import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,RouterLink,ActivatedRoute} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), 
    provideRouter(routes), 
    provideZoneChangeDetection(),

  ],
};
