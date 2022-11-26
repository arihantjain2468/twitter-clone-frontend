import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private envUrl = environment.baseurl;
  private tweetUrl = this.envUrl+"/status/add";
  email:string = "";

  constructor(private httpClient: HttpClient,private loginservice:LoginService) { 
  }

  statusPost(body:object){
    this.email = this.loginservice.getEmail();

    this.httpClient.post(this.tweetUrl,body,{ params: {
      email: this.email,
    }}).subscribe((data) => {
      console.log("post is successful",data);
    });
  }


}
