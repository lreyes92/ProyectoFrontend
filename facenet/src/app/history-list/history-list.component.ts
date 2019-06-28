import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { UserService } from '../user/userService';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  myUsers:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.callUsers();
  }


  callUsers(){
      this.userService.getUsers()
        .subscribe( (data:User[])=>this.myUsers=data,
                    error=>console.error(error),
                    () => console.log('My user list is loaded')
      );
    }
}
