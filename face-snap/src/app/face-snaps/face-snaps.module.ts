import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FacenapListComponent } from './components/facenap-list/facenap-list.component';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FacenapListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FacenapListComponent
  ],
  providers: [
  ]
})
export class FaceSnapModule { }
