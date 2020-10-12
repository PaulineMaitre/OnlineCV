import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {

  constructor() { }
  User: User = {
    firstname: 'Pauline',
    lastname: 'Maitre'
  };

  ngOnInit(): void {
  }



}
