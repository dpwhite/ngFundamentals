import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { EventService } from '../../../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared/event.model';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
