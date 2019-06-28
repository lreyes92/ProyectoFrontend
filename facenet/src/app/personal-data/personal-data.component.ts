import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { UserLoggedService } from '../user-logged.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  userLogged:User;


  constructor(private userLoggedService:UserLoggedService) { }

  ngOnInit() {
    this.getUserLogged();
  }


  getUserLogged(){
    this.userLoggedService.getUserLogged()
      .subscribe( (data:User)=>this.userLogged=data,
                  error=>console.error(error),
                  () => console.log('My user is loaded')
    );
  }

}
