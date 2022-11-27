import { Component } from '@angular/core';
import { Feeds } from '../models/feeds';
import { Observable } from 'rxjs';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent {
  status:string;
  feeds: Observable<Feeds[]>;

  constructor(private tweetservice:TweetService){
       this.status="";
       this.feeds = new Observable<Feeds[]>;
  }
  ngOnInit(): void {
    this.tweetservice.fetchFeeds();
    this.feeds = this.tweetservice.feeds;
  }

  tweet(){
      this.tweetservice.statusPost({"tweet":this.status});
  } 
 

}
