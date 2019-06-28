import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
const URL_BASE = 'http://localhost:3000/friends';


@Injectable()
export class FriendService {

  constructor(private http: HttpClient) { }


  getUserFriend() {
    return this.http.get(URL_BASE + '?idUser=1');
  }

}
