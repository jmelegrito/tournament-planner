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

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {

    let grabbedId = localStorage.getItem('id')

    this.tournamentService.getTourney(grabbedId).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.organizedList.push(data))
    });
    console.log(this.organizedList)
  }

  viewTournament(id) {
    this.grabbedTourneyId = id
  }

}
