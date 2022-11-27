import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FollowService } from '../follow.service';
import { FollowList } from '../models/follow-list';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent {
  
  users: Observable<FollowList[]>;

  constructor(private followservice:FollowService){
    this.users = new Observable<FollowList[]>;
  }

  ngOnInit(): void {
      this.followservice.fetchList();
      this.users = this.followservice.followList;
  }

  followUser(email:any): void{
      this.followservice.followUser({"id":email}); 
  }


    

}
