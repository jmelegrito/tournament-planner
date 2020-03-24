import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-check-tournament-child',
  templateUrl: './check-tournament-child.component.html',
  styleUrls: ['./check-tournament-child.component.css']
})
export class CheckTournamentChildComponent implements OnInit {

  @Input() selectedTournament: Array<object>;

  toggler = true
  grabbedTourneyId : object

  constructor(private tournamentService: TournamentService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.grabbedTourneyId = this.selectedTournament
  }

  joinTournament(data) {

    const info = {
      tournamentJoined: data.id
    }

    const participant = parseInt(localStorage.getItem('id'))
    
    this.tournamentService.join(participant, info).subscribe(
      () => {
        this.toggler = false
        this.changeDetector.detectChanges();
        this.toggler = true
      }
    )

  }

}
