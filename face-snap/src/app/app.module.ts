import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FaceSnapComponent } from './face-snaps/components/face-snap/face-snap.component';
import { FacenapListComponent } from './face-snaps/components/facenap-list/facenap-list.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorsProviders } from './interceptors';


@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FacenapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    HeaderComponent,
    LandingPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
