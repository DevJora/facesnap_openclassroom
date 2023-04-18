import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingleFaceSnapComponent } from "./face-snaps/components/single-face-snap/single-face-snap.component";
import { NewFaceSnapComponent } from "./face-snaps/components/new-face-snap/new-face-snap.component";
import { FacenapListComponent } from "./face-snaps/components/facenap-list/facenap-list.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'create', component: NewFaceSnapComponent },
    { path: 'facesnaps', component: FacenapListComponent },
    { path: '', component: LandingPageComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes) //import de route depuis la racine
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }