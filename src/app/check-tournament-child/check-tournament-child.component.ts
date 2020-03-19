import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-tournament-child',
  templateUrl: './check-tournament-child.component.html',
  styleUrls: ['./check-tournament-child.component.css']
})
export class CheckTournamentChildComponent implements OnInit {

  @Input() selectedTournament: object;
  
  constructor() { }

  ngOnInit() {
  }

}
