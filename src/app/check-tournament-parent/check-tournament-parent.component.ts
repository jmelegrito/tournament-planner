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
  toggler = false

  @Input() tourneyList: Array<object>;

  constructor(private tournamentService: TournamentService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }



  checkTournament(id) {
    this.tournamentService.get(id).subscribe(
      response => {
      this.tournament = response
      this.toggler=false
      this.changeDetector.detectChanges();
      this.toggler=true
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
    this.checkTournament(id);
    this.getList(id)
  }
}
