import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({ 
    providedIn: 'root'
})
export class Facesnapservice {
    facesnaps: FaceSnap[]= [
        {
            id: 0,
          title: 'Elle',
          description: 'La femme de ma vie',
          imageUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/93540830_2684119161818356_5075229228660686848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=NgN8dvALbF4AX9cXuV5&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAhhfQ6hjb2EG0zXaZhuar19u962USaAqLGnPDhPH3Prg&oe=63E77721',
          createdDate: new Date(),
          snaps: 190,
          location: 'Paris'
        },
        {
            id: 1,
          title: 'Moi',
          description: 'La femme de ma vie',
          imageUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/265247140_239856528275973_1781120524482629572_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=mofI_R7J628AX93DN3L&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDGcxGlajNWGbyopV_WyhehAVu9k5qiborRiIsjADpHzA&oe=63CEC507',
          createdDate: new Date(),
          snaps: 78,
          location: 'Bourgoin-Jallieu'
        },
        {
            id: 2,
                title: "Moi quand j'ai faim",
          description: 'meme',
          imageUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/318457510_483319647262992_5084266459585885735_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=x4nHNfqXtLsAX-Fs5uO&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDKMt-5xJh73-FFXLgwmHyJm8-NmYl35A0ORZuQcs705A&oe=63CD7078',
          createdDate: new Date(),
          snaps: 50,
          location: 'Marseille'
        },
        {
            id: 3,
          title: 'mon travail',
          description: 'work',
          imageUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/323286112_581129543382008_5103720479826329598_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=wK6eC6y9r5oAX8vsVC0&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAKBcLFKNKTtsFXaixuVMm9ssT26wn15Us9KDsrIS3jgg&oe=63CEA50E',
          createdDate: new Date(),
          snaps: 35,
        } 
      ];
      
      getAllFaceSnap(): FaceSnap[] {
        return this.facesnaps;
      }

      snapFaceSnapbyId(faceSnapid: number): void
      {
        const Snap = this.facesnaps.find(Snap => Snap.id === faceSnapid);

        if(Snap){
            Snap.id++;
        }else{
            throw new Error('FaceSnap not found');
        }
      }
}