import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userDetail:any;
  @Output() updateDetails:EventEmitter<any>=new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  console.log(this.userDetail);
  }
  updateUser(){
    this.updateDetails.emit("Message from child");
  }
}
