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
  
  bracketPos1: any
  bracketPos2: any
  bracketPos3: any
  bracketPos4: any
  bracketPos5: any
  bracketPos6: any
  bracketPos7: any
  bracketPos8: any
  bracketPos9: any
  bracketPos10: any
  bracketPos11: any
  bracketPos12: any
  bracketPos13: any
  bracketPos14: any
  bracketPos15: any


  disableSelect = new FormControl(false);

  tournamentParticipantList = []

  constructor(public tournamentService: TournamentService) { }

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

    this.tournamentService.getParticipants(this.tournamentId).subscribe( response => {
      let list = Object.values(response);
      console.log(this.tournamentParticipantList)
      list.map((data) => this.tournamentParticipantList.push(data))
      console.log(this.tournamentParticipantList)
      this.bracketPos1 = this.tournamentParticipantList.find((e) => { 
        console.log(e.userName)
        return e.bracket === '1a'
      })
      this.bracketPos2 = this.tournamentParticipantList.find((e) => {
        return e.bracket === '1b'
      })
      this.bracketPos3 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '1c'
      })
      this.bracketPos4 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '1d'
      })
      this.bracketPos5 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '1e'
      })
      this.bracketPos6 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '1f'
      })
      this.bracketPos7 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '1g'
      })
      this.bracketPos8 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '1h'
      })
      this.bracketPos9 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '2a'
      })
      this.bracketPos10 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '2b'
      })
      this.bracketPos11 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '2c'
      })
      this.bracketPos12 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '2d'
      })
      this.bracketPos13 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '3a'
      })
      this.bracketPos14 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '3b'
      })
      this.bracketPos15 = this.tournamentParticipantList.find((e) => { 
        return e.bracket === '4a'
      })
    });
  }
}