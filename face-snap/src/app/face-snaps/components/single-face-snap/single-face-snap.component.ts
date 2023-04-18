import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { Facesnapservice } from 'src/app/core/services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  btntext!: string;
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>

  constructor(private facesnapsservice: Facesnapservice, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.btntext = 'unliked';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.facesnapsservice.getFaceSnapById(faceSnapId);
  }

  onSnap(facesnapid: number) {
    if (this.btntext === 'unliked') {
      this.facesnapsservice.snapFaceSnapbyId(facesnapid, 'snap');
      this.btntext = 'liked';
    } else {
      this.facesnapsservice.snapFaceSnapbyId(facesnapid, 'unsnap');
      this.btntext = 'unliked';
    }

  }
}
