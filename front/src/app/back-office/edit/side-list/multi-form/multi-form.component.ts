import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {User} from '../../../../models/User';
import {Network} from '../../../../models/Network';
import {Skill} from '../../../../models/Skill';
import {Language} from '../../../../models/Language';
import {FrameContent} from '../../../../models/FrameContent';
import {FrameItem} from '../../../../models/FrameItem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-multi-form',
    templateUrl: './multi-form.component.html',
    styleUrls: ['./multi-form.component.css', '../../.././back-office.component.css']
})
export class MultiFormComponent implements OnInit {
    user: User;
    selectedLogo: File = null;
    multiForm: FormGroup;
    containers = [
        'Episode I - The Phantom Menace',
    ];

    toAdd = [
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi',
        'Episode IX – The Rise of Skywalker'
    ]

    @Input() content:{
        name:string,
        elements:[string],
        type:string,
    };

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.getUser();
        setTimeout(() => {}, 2000);
      //  this.createMultiForm()
    }

    ngOnInit() { }

    /*createMultiForm() {
        this.multiForm = this.fb.group({
            name: [''],
            logo: [''],
        });
    }*/
    onFileChanged(event) {
        const ext = event.target.files[0].name.match(/\.(.+)$/)[1];
        if(ext.toLocaleLowerCase() ==='jpg' || ext.toLocaleLowerCase() ==='jpeg' || ext.toLocaleLowerCase() ==='png'){
            this.selectedLogo = event.target.files[0]
        }
        else{
            alert('Fichiers acceptés : jpg, jpeg, png');
        }
        this.selectedLogo = event.target.files[0]
        console.log(this.selectedLogo)
    }

    add() : void {
        this.containers.push(this.toAdd[1]);
        console.log(this.user.lastName)
    }

    drop(event: CdkDragDrop<string[]>) : void {
        moveItemInArray(this.containers, event.previousIndex, event.currentIndex);
    }

    getUser(): void {
        this.userService.getUserById(4).subscribe(data => {
            this.user = data;
        });
    }

    updateUserFromForm(): void {
      //  if (this.multiForm.valid) {
            // this.user.firstName = this.user;
            // this.user.lastName = this.multiForm.get('inLastname').value;
            // this.user.birthDate = this.multiForm.get('inDate').value;
            // this.user.phoneNumber = this.multiForm.get('inPhone').value;
            // this.user.logo = 'Raphael';
            // this.user.address = this.multiForm.get('inAddress').value;
            // this.user.bio = this.multiForm.get('inBio').value;
            // this.user.email = this.multiForm.get('inMail').value;
            // TODO : Ajouter la liste d'objet : socialLink = LISTE
            // this.user.socialLink.push(new Network({
            //     name: 'toto',
            //     link: '',
            //     logo: '',
            //     user: this.user.id,
            // }));
            this.user.skills.push(new Skill({
                name: this.multiForm.get('title').value,
                logo: this.multiForm.get('logo').value,
                level: 3,
                user: this.user.id,
            }));
            // this.user.languages.push(new Language({
            //     name: 'Franglais',
            //     logo: '',
            //     level: 'Toeic 925 en 2020',
            //     user: this.user.id,
            // }));
            // this.user.frame.push(new FrameContent({
            //         title: '',
            //         order: 1,
            //         logo:'',
            //         frameItem: [new FrameItem({
            //             title:'item name',
            //             period: 'Du 3 au 7 janvier',
            //             location: 'Paris',
            //             order: 2,
            //             logo: '',
            //             content:'content of the item',
            //             frame: 1,
            //         })],
            //         user: this.user.id,
            //     }
            // ));
            console.log('Trying to send : ', this.user)
           // console.log('Trying to send skill : ', this.multiForm.get('title').value)
           // console.log('Trying to send skill : ', this.multiForm.get('logo').value)
           // console.log(this.multiForm.value)
            this.userService.updateUser(this.user).subscribe();
            document.getElementsByClassName('icon-checked')
            // this.router.navigateByUrl('')
       /* } else {
            console.log('form invalide')
            console.log(this.multiForm.get('title').value)
            console.log(this.multiForm.value)
        }*/
    }
}
