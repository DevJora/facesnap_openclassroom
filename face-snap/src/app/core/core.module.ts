import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { httpInterceptorsProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    httpInterceptorsProviders,
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class CoreModule { }
