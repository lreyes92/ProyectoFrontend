import { Component, OnInit, Input} from '@angular/core';
import { UserLoggedService } from '../user-logged.service';
import { User } from '../entities/user.model';
import { History } from '../entities/history.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  user: User;
  history: string;
  constructor(private userLoggedService:UserLoggedService) { }

  ngOnInit() {
     this.getUserLogged();
  }

  pushMessage(message: History) {
        if (this.user.histories === undefined) {
            this.user.histories = new Array();
        }
        this.user.histories.push(message);
        console.log("actualizado");
    }

  addComment(){
    //1. Creo el nuevo mensaje a partir del texto del textarea (message)
    let myMessage = new History(this.history);
    //2. Añado el mensaje al array de stories del usuario
    this.pushMessage(myMessage);
    //3. Posteo el usuario que ya tiene el storie en su array
    this.userLoggedService.addComment(this.user).subscribe();
    }

    getUserLogged(){
      this.userLoggedService.getUserLogged()
        .subscribe( (data:User)=>this.user=data,
                    error=>console.error(error),
                    () => console.log('My user is loaded')
      );
    }



}
