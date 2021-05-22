import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "src/app/shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists) 
        {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}