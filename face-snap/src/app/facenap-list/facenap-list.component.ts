import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Facesnapservice } from '../services/face-snaps.service';

@Component({
  selector: 'app-facenap-list',
  templateUrl: './facenap-list.component.html',
  styleUrls: ['./facenap-list.component.scss']
})
export class FacenapListComponent {
  ourfacesnap!: FaceSnap[];
  
  constructor(private facesnapsservice: Facesnapservice)
  {

  }

  ngOnInit(): void {
    this.ourfacesnap = this.facesnapsservice.getAllFaceSnap();
  } 
}
