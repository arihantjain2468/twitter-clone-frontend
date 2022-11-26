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
    this.username = this.loginservice.getName()

    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log("First ",event);
    //     this.username = this.loginservice.getName()
    //     // this.currentRoute = (<NavigationEnd>event).url;
    //     // console.log("Route ",this.currentRoute)
    //   }
    // });
   
    
    // if (this.service.getName()) {
    //   this.username = this.service.getName();
    //   console.log("in fetch", this.service.getName())
    // }
    // console.log("value", this.username);

    // this.route.params.subscribe(params => {
    //   this.username = params['name'];
    //   console.log(params['name']);
      // if(this.username!==false){
      //   this.router.navigateByUrl('/home');
      // }
    // });
  }
  checkuser(){
    console.log("name ",this.username);
    if(typeof(this.username) === 'string')
    {
      // this.logout=false
      console.log("true"+this.username);
      return true
    }
    else{
      console.log("False")
      return false
    }
  }
  Logout(){
    this.username=this.loginservice.logout()
    this.router.navigateByUrl('/home')
   }
}
