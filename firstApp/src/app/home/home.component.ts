import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  heading="Praveen";
  userDetails=[
  {
    "_id": "5882344603c1c3dde79d79a8",
    "index": 0,
    "name": "Pennington Lester",
    "DateOfBirth": "2015-08-16",
    "Phone":"1234567890"
  },
  {
    "_id": "5882344672028a3847acea6a",
    "index": 1,
    "name": "Mercedes Page",
    "DateOfBirth": "2015-04-19",
    "Phone":"1234567890"
  },
  {
    "_id": "58823446695ebf9c8b66f207",
    "index": 2,
    "name": "Dixon Burris",
    "DateOfBirth": "2016-02-08",
    "Phone":"1234567890"
  },
  {
    "_id": "58823446b00e0b39b0ce73d9",
    "index": 3,
    "name": "Maynard Castaneda",
    "DateOfBirth": "2015-07-06",
    "Phone":"1234567890"
  },
  {
    "_id": "588234460bd5cd1077050872",
    "index": 4,
    "name": "Amy Robertson",
    "DateOfBirth": "2015-04-29",
    "Phone":"1234567890"
  }
];
  ngOnInit() {
  }

}
