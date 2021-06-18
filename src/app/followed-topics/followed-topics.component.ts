import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followed-topics',
  templateUrl: './followed-topics.component.html',
  styleUrls: ['./followed-topics.component.css']
})
export class FollowedTopicsComponent implements OnInit {

  constructor(private router: Router) { }

  username = '';
  loginUser;

  ngOnInit() {
    if(this.username == null || this.username == undefined){
      this.router.navigate(['/home']);
    }

    this.loginUser = (!localStorage.getItem('username'))? true : false; 
    console.log("loginUser: ", this.loginUser)
  }

}
