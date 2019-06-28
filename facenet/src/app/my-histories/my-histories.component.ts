import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { UserLoggedService } from '../user-logged.service';

@Component({
  selector: 'app-my-histories',
  templateUrl: './my-histories.component.html',
  styleUrls: ['./my-histories.component.css']
})
export class MyHistoriesComponent implements OnInit {

  user:User;

  constructor(private userLoggedService:UserLoggedService) { }

  ngOnInit() {
    this.callUserLogged();
  }


  callUserLogged(){
      this.userLoggedService.getUserLogged()
        .subscribe( (data:User)=>this.user=data,
                    error=>console.error(error),
                    () => console.log('My user is loaded')
      );
    }

}
