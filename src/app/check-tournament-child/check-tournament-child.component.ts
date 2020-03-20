import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-check-tournament-child',
  templateUrl: './check-tournament-child.component.html',
  styleUrls: ['./check-tournament-child.component.css']
})
export class CheckTournamentChildComponent implements OnInit {

  @Input() selectedTournament: Array<object>;

  constructor(private tournamentService : TournamentService) { }

  ngOnInit() {
    
  }

  joinTournament() {
    console.log("Joined!")
  }

}
