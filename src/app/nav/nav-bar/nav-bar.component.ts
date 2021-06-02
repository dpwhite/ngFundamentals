import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from 'src/app/shared/index';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTerm: string = '';
  foundSessions: ISession[] 
  
  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      })
  }

}
