import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FacenapListComponent } from "./components/facenap-list/facenap-list.component";

const FacesnapRoutes: Routes = [
    {
        path: '', component: FacenapListComponent,
        children: [
            { path: ':id', component: SingleFaceSnapComponent },
            { path: 'create', component: NewFaceSnapComponent },
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(FacesnapRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }