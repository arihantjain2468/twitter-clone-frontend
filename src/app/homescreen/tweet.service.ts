import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Feeds } from './models/feeds';


@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private envUrl = environment.baseurl;
  private tweetUrl = this.envUrl+"/status/add";
  private feedsUrl = this.envUrl+"/follow/feeds";
  email:string = "";
  token:string = "";

  private _feeds: BehaviorSubject<Feeds[]>;

  private dataStore: {
    feeds: Feeds[];
  }

  constructor(private httpClient: HttpClient,private loginservice:LoginService) { 
    this.dataStore = { feeds: [] };
    this._feeds = new BehaviorSubject<Feeds[]>([]);
    let email = sessionStorage.getItem("email")
    if(email!=null){
      this.email = email;
    }
    let token = sessionStorage.getItem("token")
    if(token!=null){
      this.token = token;
    }
  }

  

  statusPost(body:object){
    let token = sessionStorage.getItem('token');  
    let header;
    if(token!=null)
     header = new HttpHeaders().set('Authorization',token);

    this.httpClient.post(this.tweetUrl,body,{ params: {
      email: this.email,
    },headers : header}).subscribe((data) => {
      console.log("post is successful",data);
    });
  }

  get feeds(): Observable<Feeds[]> {
    return this._feeds.asObservable();
  }

  fetchFeeds(){
    let token = sessionStorage.getItem('token');  
    let header;
    if(token!=null)
     header = new HttpHeaders().set('Authorization',token);

    return this.httpClient.get<Feeds[]>(this.feedsUrl,{ params: {
      email: this.email,
      },headers : header})
      .subscribe(data => {
        console.log("feeds"+data);
        let list = JSON.parse(JSON.stringify(data)).result;

        this.dataStore.feeds = list;
        this._feeds.next(Object.assign({}, this.dataStore).feeds);
      }, error => {
        console.log("Failed to fetch feeds")
      });
  }


}
