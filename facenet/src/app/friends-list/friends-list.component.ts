import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend/friend.service';
import { Friend } from '../entities/friend.model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  myFriends:Friend[];

  constructor(private friendService:FriendService) { }

  ngOnInit() {
    this.callUserFriends();
  }


  callUserFriends(){
      this.friendService.getUserFriend()
        .subscribe( (data:Friend[])=>this.myFriends=data,
                    error=>console.error(error),
                    () => console.log('My friend list is loaded')
      );
    }
}
