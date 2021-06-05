import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../../shared/index';
import { VoterService } from './voter.service';

@Component({
  selector: 'sessions-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];

  constructor(public auth: AuthService, private voterService: VoterService) { }

  ngOnInit(): void {
  }

  
  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
  
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName)
    }
    else {
      this.voterService.addVoter(session, this.auth.currentUser.userName)
    }    
  }
}
