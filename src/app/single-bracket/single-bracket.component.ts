import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../tournament.service'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-single-bracket',
  templateUrl: './single-bracket.component.html',
  styleUrls: ['./single-bracket.component.css']
})
export class SingleBracketComponent implements OnInit {

  @Input() tournamentId: number;

  disableSelect = new FormControl(false);

  tournamentParticipantList = []

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournamentService.getParticipants(1).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.tournamentParticipantList.push(data))
    });
  }

}
