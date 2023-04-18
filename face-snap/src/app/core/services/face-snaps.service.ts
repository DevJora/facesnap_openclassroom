import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservedValueOf, map, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root' // service installé à la racine de l'application
})
export class Facesnapservice {
  constructor(private http: HttpClient) {

  }

  Urljson: string = 'http://localhost:3000/facesnaps';
  face_snaps: FaceSnap[] = [];

  // methodes : type de retour 
  getAllFaceSnap(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>(`${this.Urljson}`);
  }

  getFaceSnapById(facesnapId: number): Observable<FaceSnap> {

    return this.http.get<FaceSnap>(`${this.Urljson}/${facesnapId}`);
  }

  snapFaceSnapbyId(faceSnapid: number, snapType: 'snap' | 'unsnap')//: Observable<FaceSnap>
  {
    return this.getFaceSnapById(faceSnapid).pipe(

      map(facesnap => ({
        ...facesnap,  //opérateur spread pour copier le contenu
        snaps: facesnap.snaps + snapType === 'snap' ? 1 : -1 // modification de l'information => observable haut niveau
      })
      ),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`${this.Urljson}/${faceSnapid}`, updatedFaceSnap))
    )

  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location: string }): Observable<FaceSnap> {
    return this.getAllFaceSnap().pipe(

      map(facesnaps => [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFaceSnaps => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFaceSnaps.id + 1

      })), switchMap(newfacesnap => this.http.post<FaceSnap>(this.Urljson, newfacesnap))
    )
  }
}


