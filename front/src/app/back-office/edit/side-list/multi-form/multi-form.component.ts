import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-multi-form',
    templateUrl: './multi-form.component.html',
    styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent implements OnInit {

    containers = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
    ];

    toAdd = [
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi',
        'Episode IX – The Rise of Skywalker'
    ]

    constructor() { }

    ngOnInit() { }

    add() {
        this.containers.push(this.toAdd[1]);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.containers, event.previousIndex, event.currentIndex);
    }
}
