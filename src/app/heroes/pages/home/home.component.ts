import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 15px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit(): void {}

  get auth(): Auth {
    return this.authSvc.auth
  }

  logout() {
    this.authSvc.logout();
    this.router.navigate(['./auth'])
  } 
}
