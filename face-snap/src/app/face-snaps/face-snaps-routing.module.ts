import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FacenapListComponent } from "./components/facenap-list/facenap-list.component";
import { AuthGuard } from "../core/guard/auth.guard";

const FacesnapRoutes: Routes = [
    { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
    { path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard] },
    { path: '', component: FacenapListComponent, canActivate: [AuthGuard] },
]
@NgModule({
    imports: [
        RouterModule.forChild(FacesnapRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FaceSnapsRoutingModule { }