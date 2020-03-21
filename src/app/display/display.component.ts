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

  constructor(private tournamentService: TournamentService, private router: Router, ) {}
  

  ngOnInit() {
    this.tournamentService.getParticipants(localStorage.getItem('tourneyChosen')).subscribe( response => {
      
      let list = Object.values(response);
      console.log(list)
      list.map((data) => this.thisTournamentList.push(data))
      console.log(this.thisTournamentList)
    });
    
  }
  
  
  
}
