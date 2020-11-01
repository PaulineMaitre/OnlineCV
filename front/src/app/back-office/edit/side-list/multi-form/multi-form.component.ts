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
import {formatNumber} from '@angular/common';

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
        this.createMultiForm()
    }

    ngOnInit() { }

    createMultiForm() {
        this.multiForm = this.fb.group({
            name: ['', Validators.required],
            logo: [''],
            level:[''],
            link:['']
        });
    }
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
    }

    drop(event: CdkDragDrop<string[]>) : void {
        moveItemInArray(this.containers, event.previousIndex, event.currentIndex);
    }

    getUser(): void {
        this.userService.getUserById(4).subscribe(data => {
            this.user = data;
        });
    }

    updateUserFromForm(type:string): void {
        switch (type) {
            case 'skills':
                if (this.multiForm.valid) {
                    this.user.skills.push(new Skill({
                        name: this.multiForm.get('name').value,
                        logo: this.multiForm.get('logo').value,
                        level: this.multiForm.get('level').value,
                    }));
                    this.userService.updateUser(this.user).subscribe();
                    // document.getElementsByClassName('icon-checked');
                    // this.router.navigateByUrl('')
                } else {
                    alert('form invalide');
                    console.log(this.multiForm.get('name').value)
                    console.log(this.multiForm.value)
                }
                break;
            case 'socialLink':
                if (this.multiForm.valid) {
                    this.user.socialLink.push(new Network({
                        name: this.multiForm.get('name').value,
                        logo: this.multiForm.get('logo').value,
                        link: this.multiForm.get('link').value,
                    }));
                    console.log(this.multiForm.get('name').value)
                    console.log(this.multiForm.value)
                    this.userService.updateUser(this.user).subscribe();
                } else {
                    alert('form invalide');
                }
                break;
            case 'languages':
                if (this.multiForm.valid) {
                    this.user.languages.push(new Language({
                        name: this.multiForm.get('name').value,
                        logo: this.multiForm.get('logo').value,
                        level: this.multiForm.get('level').value,
                    }));
                    console.log(this.multiForm.get('name').value)
                    console.log(this.multiForm.value)
                    this.userService.updateUser(this.user).subscribe();
                } else {
                    alert('form invalide');
                }
                break;
        }
    }
}
