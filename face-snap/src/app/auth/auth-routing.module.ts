import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';

const loginRoute = [
  { path: 'auth/login', component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(loginRoute)
  ],
  exports: [
    RouterModule
  ]

})
export class AuthRoutingModule { }
