import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Skill} from '../models/Skill';
import {Network} from '../models/Network';
import {FrameContent} from '../models/FrameContent';
import {FrameItem} from '../models/FrameItem';
import {Language} from '../models/Language';
import {Router} from '@angular/router';

@Component({
    selector: 'app-back-office',
    templateUrl: './back-office.component.html',
    styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

    userForm: FormGroup;
    user: User;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.getUser();
        setTimeout(() => {}, 2000);
        this.createForm();
    }

    createForm() : void {
        // Mettre des validators ?
        // .fb.group = new FormGroup
        this.userForm = this.fb.group({
            inFirstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            inLastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            inMail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            inPhone: ['', [Validators.required, Validators.pattern('^[0-9 %+]+')]],
            inDate: [''],
            inAddress: ['', [Validators.required]],
            inBio: [''],
        });
    }

    getUser(): void {
        this.userService.getUserById(1).subscribe(data => {
            this.user = data;
        });
    }

    updateUserFromForm(): void {
        if (this.userForm.valid) {
            this.user.firstName = this.userForm.get('inFirstname').value;
            this.user.lastName = this.userForm.get('inLastname').value;
            this.user.birthDate = this.userForm.get('inDate').value;
            this.user.phoneNumber = this.userForm.get('inPhone').value;
            this.user.picture = 'Raphael';
            this.user.address = this.userForm.get('inAddress').value;
            this.user.bio = this.userForm.get('inBio').value;
            this.user.email = this.userForm.get('inMail').value;
            // TODO : Ajouter la liste d'objet : socialLink = LISTE
            this.user.socialLink.push(new Network({
                name: 'toto',
                link: '',
                logo: '',
                user: this.user.id,
            }));
            this.user.skills.push(new Skill({
                name: 'Toto',
                logo: '',
                level: 3,
                user: this.user.id,
            }));
            this.user.languages.push(new Language({
                name: 'Franglais',
                logo: '',
                level: 'Toeic 925 en 2020',
                user: this.user.id,
            }));
            this.user.frame.push(new FrameContent({
                title: '',
                order: 1,
                logo:'',
                frameItem: [new FrameItem({
                    title:'item name',
                    period: 'Du 3 au 7 janvier',
                    location: 'Paris',
                    order: 2,
                    logo: '',
                    content:'content of the item',
                    frame: 1,
                })],
                user: this.user.id,
                }
            ));
            console.log('Trying to send : ', this.user)
            this.userService.updateUser(this.user).subscribe();
            this.router.navigateByUrl('/back/edit')
        } else {
            console.log('form invalide')
        }
    }
}
