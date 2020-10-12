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
<<<<<<< HEAD
    firstname: 'Pauline',
    lastname: 'Maitre'
=======
    firstName: 'Fabien',
    lastname: 'SOLDÉ'
>>>>>>> 083f9ddeb315eb3cf04bcd76dfcdd0077c5e67f7
  };

  ngOnInit(): void {
  }



}
