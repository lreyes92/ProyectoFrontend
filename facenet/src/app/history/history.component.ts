import { Component, OnInit, Input } from '@angular/core';
import { User } from '../entities/user.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
