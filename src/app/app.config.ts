import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    // Manejo global de errores del navegador
    provideBrowserGlobalErrorListeners(),

    // Router de Angular
    provideRouter(routes),

    // Firebase Core
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // Firebase Authentication
    provideAuth(() => getAuth()),

    //Firestore Database
    provideFirestore(() => getFirestore()),

    //Firebase Storage
    provideStorage(() => getStorage()),
  ]
};
