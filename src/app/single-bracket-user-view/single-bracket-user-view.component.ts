import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { TournamentService } from '../tournament.service'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-single-bracket-user-view',
  templateUrl: './single-bracket-user-view.component.html',
  styleUrls: ['./single-bracket-user-view.component.css']
})
export class SingleBracketUserViewComponent implements OnInit {

  @Input() tournamentId: any;

  bracketPos: Array<any> = [];
  
  bracketPos1: object
  bracketPos2: object
  bracketPos3: object
  bracketPos4: object
  bracketPos5: object
  bracketPos6: object
  bracketPos7: object
  bracketPos8: object
  bracketPos9: object
  bracketPos10: object
  bracketPos11: object
  bracketPos12: object
  bracketPos13: object
  bracketPos14: object
  bracketPos15: object


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
    const participant = parseInt(localStorage.getItem('tourneyChosen'))

    this.tournamentService.getParticipants(participant).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.tournamentParticipantList.push(data))
      this.bracketPos1 = this.tournamentParticipantList.find((e) => { 
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