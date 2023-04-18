import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { Facesnapservice } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  btntext!: string;

  constructor(private facesnapsservice: Facesnapservice,
    private router: Router) {

  }
  ngOnInit(): void {
    this.btntext = 'unliked';

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

  onViewSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}
