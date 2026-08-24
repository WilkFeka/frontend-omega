import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    
    // provideClientHydration(),

    providePrimeNG({
      theme:{ preset: Aura },
      license: 'eyJpZCI6IjA3ODJjNjEzLTM4NTctNDljMi04N2I1LWY3YTI2YWFjY2IzMCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODc1MjQyNTgsImV4cCI6MTgxOTA2MDI1OH0.SBLGEe_Z_j244RKxtzqZOE2nzh0gtY53AVgoyz24xHy033ijbb3XxpJWUj9Nae7h8OEZiPC1v5xDp2FjekeJAw'
    }),

    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'csrftoken',
        headerName: 'X-CSRFToken'
      })
    ),

    
  ]
};
