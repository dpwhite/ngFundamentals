import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../common/toastr.service'
import { EventService } from '../../shared/event.service';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit{

  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {}
  
  handleEventClicked(data) {
    console.log(data);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventData) {
    this.toastrService.success(eventData);
  }
}
