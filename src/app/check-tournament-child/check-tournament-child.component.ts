import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-check-tournament-child',
  templateUrl: './check-tournament-child.component.html',
  styleUrls: ['./check-tournament-child.component.css']
})
export class CheckTournamentChildComponent implements OnInit {

  @Input() selectedTournament: Array<object>;

  participant : number
  toggler = true
  

  constructor(private tournamentService : TournamentService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  joinTournament(data) {


    const info = {
      tournamentJoined : data.id
    }
    
    this.participant = parseInt(localStorage.getItem('id'))

    this.tournamentService.join(this.participant, info).subscribe(
      response => {
        console.log(response)
        this.toggler=false
      this.changeDetector.detectChanges();
      this.toggler=true
      }
    )

  }

}
