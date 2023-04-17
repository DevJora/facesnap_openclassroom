import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root' // service installé à la racine de l'application
})
export class Facesnapservice {
  face_snaps: FaceSnap[] = [
    {
      id: 0,
      title: 'X',
      description: 'X',
      imageUrl: 'https://i.pinimg.com/564x/83/f0/d4/83f0d4b367599faa68fce9e0a093af8c.jpg',
      createdDate: new Date(),
      snaps: 190,
      location: 'Paris'
    },
    {
      id: 1,
      title: 'Moi',
      description: 'La femme de ma vie',
      imageUrl: 'https://images.pexels.com/photos/15824212/pexels-photo-15824212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate: new Date(),
      snaps: 78,
      location: 'Bourgoin-Jallieu'
    },
    {
      id: 2,
      title: "Moi quand j'ai faim",
      description: 'meme',
      imageUrl: 'https://images.pexels.com/photos/12311393/pexels-photo-12311393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate: new Date(),
      snaps: 50,
      location: 'Marseille'
    },
    {
      id: 3,
      title: 'mon travail',
      description: 'work',
      imageUrl: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate: new Date(),
      snaps: 35,
    }
  ];

  // methodes : type de retour 
  getAllFaceSnap(): FaceSnap[] {
    return this.face_snaps;
  }

  snapFaceSnapbyId(faceSnapid: number, snapType: 'snap' | 'unsnap'): FaceSnap {
    const faceSnap = this.face_snaps.find(x => x.id == faceSnapid);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }
}