import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private envUrl =environment.baseurl;
  private registerUrl = this.envUrl+"/user/register";
  private loginUrl = this.envUrl+"/user/login";
  
  Data: any;
  Register: any;
  username:String;
  email:string;

  constructor(private httpClient: HttpClient, private router: Router) { 
    this.username = "";
    this.email = "";
  }

  login = (body:object):any =>{

    this.httpClient.post(this.loginUrl, body)
      .subscribe((data):any => {
        this.Data = data;

        sessionStorage.setItem("email",this.Data.data1.email);
        sessionStorage.setItem("token",this.Data.token);
        sessionStorage.setItem("username",this.Data.data1.name);

        if (this.Data.result == 1) {
          this.router.navigateByUrl('/homescreen');
          window.location.reload();
        }
      }, error => {
        return "error";
      })

      return this.Data;
  }
  register(body:object) {
    this.httpClient.post(this.registerUrl, body)
      .subscribe((data) => {
        this.Register = data;

        sessionStorage.setItem("email",this.Register.data1.email);
        sessionStorage.setItem("token",this.Register.token);
        sessionStorage.setItem("username",this.Register.data1.name);


        if(this.Register.result == 1){
          this.router.navigateByUrl('/homescreen');      
          window.location.reload(); 
         }
      }
      );
  }
  
  logout(){
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    this.router.navigateByUrl('/login');
  }
}
