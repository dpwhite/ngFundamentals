import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent: any;
  isDirty: boolean = true;
  constructor(private router: Router, private eventSerivce: EventService) { }

  ngOnInit(): void {
  }


  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventSerivce.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
