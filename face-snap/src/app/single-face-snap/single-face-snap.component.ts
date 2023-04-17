import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Facesnapservice } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  btntext!: string;
  faceSnap!: FaceSnap;

  constructor(private facesnapsservice: Facesnapservice, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.btntext = 'unliked';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.facesnapsservice.snapFaceSnapbyId(faceSnapId, 'snap');
  }

  onSnap() {
    if (this.btntext === 'unliked') {
      this.facesnapsservice.snapFaceSnapbyId(this.faceSnap.id, 'snap');
      this.faceSnap.snaps++;
      this.btntext = 'liked';
    } else {
      this.facesnapsservice.snapFaceSnapbyId(this.faceSnap.id, 'unsnap');
      this.faceSnap.snaps--;
      this.btntext = 'unliked';
    }

  }
}
