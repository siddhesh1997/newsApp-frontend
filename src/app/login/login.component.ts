import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from "angularx-social-login"
//import { SocialUser } from '../../assets/models.ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  err:any;

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  submit(form:NgForm){
    console.log(form.value)
    this.router.navigate(['dashboard']);
    localStorage.setItem('username', btoa(this.username));
  }

  reset(){
    this.err = '';
  }

 

}
