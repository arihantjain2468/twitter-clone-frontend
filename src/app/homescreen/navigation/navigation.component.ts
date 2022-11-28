import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  username: String;
  currentRoute: String;
  constructor( private router: Router ,private loginservice: LoginService) {
    this.username = "";
    this.currentRoute = "";
   
   }

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    if(username!=null)
    this.username = username;

  }
  checkuser(){
    if(typeof(this.username) === 'string')
    {
      return true
    }
    else{
      return false
    }
  }
  Logout(){
    this.loginservice.logout();    
   }
}
