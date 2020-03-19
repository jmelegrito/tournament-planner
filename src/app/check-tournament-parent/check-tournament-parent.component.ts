import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../tournament.service'

@Component({
  selector: 'app-check-tournament-parent',
  templateUrl: './check-tournament-parent.component.html',
  styleUrls: ['./check-tournament-parent.component.css']
})
export class CheckTournamentParentComponent implements OnInit {

  tournament : object

  @Input() tourneyList: Array<object>;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
  }

  checkTournament(){
    let select = (<HTMLElement>event.target).id
    this.tournamentService.get(select).subscribe(
      response => {this.tournament = response
        console.log(this.tournament)}
      
    )
    
    
  }
  


}
