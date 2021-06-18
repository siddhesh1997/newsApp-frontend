import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: any;
  user;
  authInstance;
  gapiSetup;
  error;
  userLogin: boolean = false;         // Assign TRUE if user logs in successfully!
  showProfile;

  constructor(private router : Router) { }

  ngOnInit() {
    // this.username = atob(localStorage.getItem('username'));
    this.username = (!localStorage.getItem('username')) ? null : atob(localStorage.getItem('username'));
  }

  /* async ngOnInit() {
    this.username = (!localStorage.getItem('username')) ? null : atob(localStorage.getItem('username'));
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  } */

  /* followedTopics(){
    if(this.username == null || this.username == undefined){
      alert('Plz login')
    }
  } */

  /* async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '391206573924-2fnhuvapmccb6s6kn5fd9jprntk2ps6o.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
          this.userLogin = true;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
    });
  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  } */


  profileToggle($event: Event) {
    this.showProfile = !this.showProfile;
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
