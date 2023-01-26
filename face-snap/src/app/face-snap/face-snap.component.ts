import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Facesnapservice } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  @Input() faceSnap2!: FaceSnap;
  btntext!: string; 

    constructor(private facesnapsservice: Facesnapservice) {

    }
  ngOnInit(): void {
    this.btntext = 'unliked';

  }

  onSnap(){
      if(this.btntext === 'unliked'){
        console.log(this.facesnapsservice.snapFaceSnapbyId(this.faceSnap.id));
        this.facesnapsservice.snapFaceSnapbyId(this.faceSnap.snaps);
        this.btntext = 'liked';
      }else{
        this.faceSnap.snaps--;
        this.btntext = 'unliked';
      }

  }
}
