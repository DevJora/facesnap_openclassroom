import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!: FaceSnap;
  yourSnap!: FaceSnap;


  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Elle',
      'La femme de ma vie',
      'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/93540830_2684119161818356_5075229228660686848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=NgN8dvALbF4AX9cXuV5&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAhhfQ6hjb2EG0zXaZhuar19u962USaAqLGnPDhPH3Prg&oe=63E77721',
      new Date(),
      0
    );

    this.yourSnap = new FaceSnap(
      'Moi',
      'Description',
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/320002155_540964184329636_4459025118953280615_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cfBk_javgVoAX8YEyAL&_nc_ht=scontent-cdg2-1.xx&oh=00_AfBkF-W-iXaRXJeJjBvK-j-QZ55QRK8J5rGTq5NbsfI95g&oe=63C5A2D8',
      new Date(),
      0
    );
}
}
