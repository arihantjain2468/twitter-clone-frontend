import { Component } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent {
  status:string;

  constructor(private tweetservice:TweetService){
       this.status = "";
  }

  tweet(){
      this.tweetservice.statusPost({"tweet":this.status});
  } 

}
