import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../../shared/index';
import  { tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  addMode: boolean;
  event: IEvent;
  text: string; 
  myEvents: IEvent[]; 

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      this.event  = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });

    const source = of(1, 2, 3, 4, 5);
 
    // source.pipe(
    //   tap(n => {
    //     if (n > 3) {
    //       throw new TypeError(`Value ${ n } is greater than 3`);
    //     }
    //   })
    // )
    // .subscribe({ next: console.log, error: err => console.log(err.message) });

    this.eventService.getEvents().pipe(
      tap(n  => {
        throw new TypeError(`Value ${ JSON.stringify(n) } is greater than 3`);
      })
    ).subscribe({ next: console.log, error: err => console.log(err.message) });

    // console.log('My events: ', JSON.stringify(this.myEvents));
    // console.log('Text message: ', this.text);
  }

  addSession() {
    this.addMode = true; 
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false; 
  }
}
