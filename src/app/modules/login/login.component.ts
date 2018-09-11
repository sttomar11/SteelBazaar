import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/services/login-service';
import { Router } from '@angular/router';
import { LoginDetails } from '../common/models/login-details.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public dm: LoginDetails;

  constructor(private loginService: LoginService, private router: Router) {
    this.dm = new LoginDetails();
  }

  ngOnInit() {
  }

  login() {
    this.loginService.logIn();
    this.router.navigate(['home']);
  }

}
