import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-show-organized-tourney',
  templateUrl: './show-organized-tourney.component.html',
  styleUrls: ['./show-organized-tourney.component.css']
})
export class ShowOrganizedTourneyComponent implements OnInit {

  organizedList = []
  grabbedTourneyId : number
  viewed = false;

  constructor(public tournamentService: TournamentService) { }

  ngOnInit() {

    let grabbedId = localStorage.getItem('id')

    this.tournamentService.getTourney(grabbedId).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.organizedList.push(data))
    });
    
  }

  viewTournament(id) {
    this.grabbedTourneyId = id
    this.viewed = false;
    console.log(this.grabbedTourneyId)
    console.log(this.viewed)
    this.viewed = true;
  }

}
