import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FacenapListComponent } from "./facenap-list/facenap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";

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