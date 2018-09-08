import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.logIn();
    this.router.navigate(['home']);
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
