import { Component } from '@angular/core';
import { TournamentService } from './tournament.service'
import { Router } from '@angular/router'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tournament-planner';
  constructor(private tournamentService: TournamentService, private router: Router) { }

  signOutUserFunction() {
    this.tournamentService.signOut().subscribe(response => this.router.navigate([response]));
  }



}
