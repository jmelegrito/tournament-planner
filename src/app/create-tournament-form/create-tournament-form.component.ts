import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../tournament.service'

@Component({
  selector: 'app-create-tournament-form',
  templateUrl: './create-tournament-form.component.html',
  styleUrls: ['./create-tournament-form.component.css']
})
export class CreateTournamentFormComponent implements OnInit {
  tournament = {
    name: '',
    description: '',
    contact: '',
    type: '',
    created: false
  };
  organizerCheck = false;
  
  @Input() userType: Object;
  @Input() userId: Object;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    if(this.userType === 'Organizer'){
      this.organizerCheck = true
    }
  }

  saveTournament() {
    const data = {
      name: this.tournament.name,
      description: this.tournament.description,
      contact: this.tournament.contact,
      type: this.tournament.type,
      organizer: this.userId
    }

    this.tournamentService.create(data)
        .subscribe(
          response => {
            console.log(response);
          });
  }

  newTournament() {
    this.tournament = {
      name: '',
      description: '',
      contact: '',
      type: '',
      created: false
    };
  }

}
