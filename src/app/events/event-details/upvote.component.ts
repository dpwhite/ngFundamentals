import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ISession } from 'src/app/shared';

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent{
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    };
    @Input() count: number;
    @Output() vote = new EventEmitter();
    iconColor: string
    constructor() {}

    onClick() {
        this.vote.emit({});
    }
}