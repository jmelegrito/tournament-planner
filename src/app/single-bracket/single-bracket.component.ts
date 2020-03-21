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

  bracketPos: Array<any> = [];
  
  bracketPos1: object

  disableSelect = new FormControl(false);

  tournamentParticipantList = []

  constructor(private tournamentService: TournamentService) { }

  organizerCheck= false

  onBracketPos(object,data) {
    console.log(data);
    console.log(object)
    console.log(this.bracketPos[data])

    const info = {
      bracket : data
    }
   
    this.tournamentService.join(this.bracketPos[data], info).subscribe(
      response => {
        console.log(response)
      }
    )

  }

  ngOnInit() {
    let user = localStorage.getItem('user')

    if(user === 'Organizer'){
      this.organizerCheck = true
    }

    this.tournamentService.getParticipants(1).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.tournamentParticipantList.push(data))
      this.bracketPos1 = this.tournamentParticipantList.find((e) => { 
        console.log(e);
        return e.bracket === '1a'
      })
       console.log(this.bracketPos1)
    });
  }

}