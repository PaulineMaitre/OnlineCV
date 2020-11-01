import {Component, Input, OnInit} from '@angular/core';
import {Mail} from '../../models/Mail';
import { FormBuilder } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  mail: Mail;
  mailForm;

  constructor( private formBuilder: FormBuilder,private userService: UserService) {
    this.mailForm = this.formBuilder.group({
      contact: '',
      content: '',
      sendTo: '',
    });
  }
  @Input() user: User;

  ngOnInit(): void {
  }

  onSubmit(mailElements){
    this.mail = {
      content:mailElements.contact.toString(),
      contact:mailElements.content.toString(),
      sendTo: this.user.email.toString(),
    };
    this.userService.sendMail(mailElements.contact.toString(),mailElements.content.toString(),this.user.email.toString()).subscribe();
  }
}
