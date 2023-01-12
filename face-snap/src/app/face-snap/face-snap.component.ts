import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  @Input() faceSnap2!: FaceSnap;
  btntext!: string; 

  ngOnInit(): void {
    this.btntext = 'unliked';

  }

  onSnap(){
      if(this.btntext === 'unliked'){
        this.faceSnap.snaps++;
        this.btntext = 'liked';
      }else{
        this.faceSnap.snaps--;
        this.btntext = 'unliked';
      }

  }
}
