import { Component, OnInit, Input } from '@angular/core';
import {UserDetailComponent} from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input() pageName:String;
  @Input() Users:Array<any>;
  item:any;
  showDetails=false;
  ngOnInit() {
  }
  userDetails(user){
    this.showDetails=true;
    console.log(user);
    this.item=user;
  }
  getdatafromChild(event){
    console.log(event);
  }
}
