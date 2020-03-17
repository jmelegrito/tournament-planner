import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signInForm',
  templateUrl: './signInForm.component.html',
  styleUrls: ['./signInForm.component.css']
})
export class SignInFormComponent implements OnInit {
  signInUser = {
    userName: '',
    password: '',
    created: false
  };
  submitted = false;

  constructor(private tournamentService: TournamentService, private router: Router) { }

  ngOnInit() {
  }
  signInUserFunction() {
    const data = {
      userName: this.signInUser.userName,
      password: this.signInUser.password,
    }
    this.tournamentService.signIn(data)
        .subscribe(
          response => {
            this.router.navigate([response])
          });
    this.submitted = true;
  }

  newUser() {
    this.submitted = false;
    this.signInUser = {
      userName: '',
      password: '',
      created: false
    };
  }

}
