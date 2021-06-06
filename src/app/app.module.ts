import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  EventsListComponent,
  EventThumbnailComponent, 
  EventService, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventListResolver, 
  EventRouteActivator,
  CreateSessionComponent, 
  UpvoteComponent,
  VoterService,
  SessionListComponent,
  LocationValidator
} from './events/index';
import { JQ_TOKEN, ToastrService, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent, 
    ModalTriggerDirective,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }, 
    {provide: JQ_TOKEN, useValue: jQuery},
    EventListResolver, 
    VoterService,
    AuthService
  ],
  bootstrap: [EventsAppComponent],
  exports: []
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
