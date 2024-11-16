/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), provideAnimationsAsync(), // Enable animations support
  ],
}).catch((err) => console.error(err));
