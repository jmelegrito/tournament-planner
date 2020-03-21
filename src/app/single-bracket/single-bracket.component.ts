import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { TournamentService } from '../tournament.service'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-single-bracket',
  templateUrl: './single-bracket.component.html',
  styleUrls: ['./single-bracket.component.css']
})
export class SingleBracketComponent implements OnInit {

  @Input() tournamentId: number;

  bracketPos: string;

  disableSelect = new FormControl(false);

  tournamentParticipantList = []

  constructor(private tournamentService: TournamentService) { }

  organizerCheck= false



  onBracketPos() {
    console.log(this.bracketPos);
  }

  ngOnInit() {
    let user = localStorage.getItem('user')

    if(user === 'Organizer'){
      this.organizerCheck = true
    }

    this.tournamentService.getParticipants(1).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.tournamentParticipantList.push(data))
    });
  }

}
