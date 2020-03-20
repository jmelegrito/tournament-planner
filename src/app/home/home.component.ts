import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tournamentMasterList = []
  kindOfUser = {}
  idOfUser = {}
  participantCheck = false

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {

    this.tournamentService.getAll().subscribe( response => {
      let list = Object.values(response);
      list.map((data) => this.tournamentMasterList.push(data))
    });

      this.kindOfUser = localStorage.getItem('user')
      this.idOfUser = localStorage.getItem('id')

      console.log(this.idOfUser)

      if(this.kindOfUser === 'participant'){
        this.participantCheck = true
      }

    // this.tournamentService.getParticipants(1).subscribe(
    //   response => {
    //     console.log(response)
    //   }
    // )

      
  }

}
