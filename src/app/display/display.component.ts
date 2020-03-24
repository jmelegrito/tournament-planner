import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
   thisTournamentList = []
   @Input() toggleFlag: boolean;

  constructor(public tournamentService: TournamentService, public router: Router, ) {}
  

  ngOnInit() {
    this.tournamentService.getParticipants(localStorage.getItem('tourneyChosen')).subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.thisTournamentList.push(data))
    });
    
  }
  
  
  
}
