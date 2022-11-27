import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitterFrontend';

  constructor(private router: Router){
    if(sessionStorage.getItem("email")!=null && sessionStorage.getItem("token")!=null){
      this.router.navigateByUrl('/homescreen');       
    }
  }
}
