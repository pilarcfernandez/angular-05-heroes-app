import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private router: Router, private authSvc: AuthService) { }

  login() {

    this.authSvc.login().subscribe(resp => {
      if (resp.id) {
        this.router.navigate(['./heroes/'])
      }
    })
    
  }

}
