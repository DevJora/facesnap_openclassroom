import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSerive } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authservice: AuthSerive, private router: Router) { }

  ngOnInit(): void {

  }

  onLogin(): void {
    this.authservice.login();
    this.router.navigateByUrl('/facesnaps');
  }
}
