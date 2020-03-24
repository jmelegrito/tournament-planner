import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-check-tournament-parent',
  templateUrl: './check-tournament-parent.component.html',
  styleUrls: ['./check-tournament-parent.component.css']
})
export class CheckTournamentParentComponent implements OnInit {

  tournament: object
  tournamentParticipants = []
  toggler = true
  chosenTourney: number
  selectChecker = false

  @Input() tourneyList: Array<object>;

  constructor(public tournamentService: TournamentService, public changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }



  checkTournament() {
    this.chosenTourney = parseInt(localStorage.getItem('tourneyChosen'))
    this.tournamentService.get(this.chosenTourney).subscribe(
      response => {
      this.tournament = response
      this.toggler=false
      this.changeDetector.detectChanges();
      this.toggler=true
      this.selectChecker = true
      }
    )
  }

  getList(id){
    // this.tournamentService.getParticipants(id).subscribe( response => {
    //   let list = Object.values(response);
    //   list.map((data) => this.tournamentParticipants.push(data))
    // });
    localStorage.setItem('tourneyChosen', id)
  }

  queryServer(id){
    this.getList(id)
    this.checkTournament();
  }
}
