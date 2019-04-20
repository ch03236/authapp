import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( private auth: AuthService) { }

  login(){
    this.auth.login();
   // console.log(this.auth);
  }

  logout(){
    this.auth.logout();
  }

}
