import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Facesnapservice } from '../services/face-snaps.service';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-facenap-list',
  templateUrl: './facenap-list.component.html',
  styleUrls: ['./facenap-list.component.scss']
})
export class FacenapListComponent {
  ourfacesnap!: FaceSnap[];
  private destroy$!: Subject<boolean>;      // un subject est un observable qu'on peut faire émettre quand on veut 


  constructor(private facesnapsservice: Facesnapservice) // argument pour accéder à un composant 
  {

  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();//initialisation du subject
    this.ourfacesnap = this.facesnapsservice.getAllFaceSnap();
    //Fuites de mémoire 
    interval(1000).pipe(
      takeUntil(this.destroy$),//prendre l'émission jusqu'à ce que ...
      //take(1),completer un observeur avec take() en prennant l'émission d'observable qui nous intéresse. 
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
