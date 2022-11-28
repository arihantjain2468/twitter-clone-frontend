import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FollowList } from './models/follow-list';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private envUrl = environment.baseurl;
  private tweetUrl = this.envUrl+"/follow/add";
  private feedsUrl = this.envUrl+"/follow/fetch";
  email:string = "";
  token:string= "";

  private _followList: BehaviorSubject<FollowList[]>;

  private dataStore: {
    followList: FollowList[];
  }


  constructor(private httpClient: HttpClient,private loginservice:LoginService) { 
    this.dataStore = { followList: [] };
    this._followList = new BehaviorSubject<FollowList[]>([]);
    let email = sessionStorage.getItem("email");
    if(email!=null){
      this.email = email;
    }
    let token = sessionStorage.getItem("token");
    if(token!=null){
      this.token = token;
    }
  }

  followUser(body:object){
    let token = sessionStorage.getItem('token');  
    let header;
    if(token!=null)
     header = new HttpHeaders().set('Authorization',token);

    this.httpClient.post(this.tweetUrl,body,{ params: {
      email: this.email,
    },headers : header}).subscribe((data) => {
      console.log("post is successful",data);
      window.location.reload();
    });
  }

  get followList(): Observable<FollowList[]> {
    return this._followList.asObservable();
  }

  fetchList(){
    let token = sessionStorage.getItem('token');  
    let header;
    if(token!=null)
     header = new HttpHeaders().set('Authorization',token);


    return this.httpClient.get(this.feedsUrl,{ params: {
      email: this.email,
      },headers : header})
      .subscribe(data => {
        console.log(JSON.parse(JSON.stringify(data)).result);
        let list = JSON.parse(JSON.stringify(data)).result;
        this.dataStore.followList = list as FollowList[];
        this._followList.next(Object.assign({}, this.dataStore).followList);
      }, error => {
        console.log("Failed to fetch feeds")
      });
  }
}
