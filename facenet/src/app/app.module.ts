import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routes';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommentComponent } from './comment/comment.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoggedService } from './user-logged.service';
import { HistoryComponent } from './history/history.component';
import { EventComponent } from './event/event.component';
import { UserService } from './user/userService';
import { ThingsComponent } from './things/things.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendComponent } from './friend/friend.component';
import { MyHistoriesComponent } from './my-histories/my-histories.component';
import { MyfriendsComponent } from './myfriends/myfriends.component';
import { SearchComponent } from './search/search.component';
import { FriendInfoComponent } from './friend-info/friend-info.component';
import { YesFriendComponent } from './yes-friend/yes-friend.component';
import { NoFriendComponent } from './no-friend/no-friend.component';
import { FriendService } from './friend/friend.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    UserListComponent,
    CommentComponent,
    HistoryListComponent,
    HistoryComponent,
    EventComponent,
    ThingsComponent,
    PersonalDataComponent,
    FriendsListComponent,
    FriendComponent,
    MyHistoriesComponent,
    MyfriendsComponent,
    SearchComponent,
    FriendInfoComponent,
    YesFriendComponent,
    NoFriendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing

  ],
  providers: [UserLoggedService, UserService,FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
