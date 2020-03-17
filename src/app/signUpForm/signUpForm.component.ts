import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signUpForm',
  templateUrl: './signUpForm.component.html',
  styleUrls: ['./signUpForm.component.css']
})
export class SignUpFormComponent implements OnInit {
  signUpUser = {
    userName: '',
    emailAddress: '',
    password: '',
    userType: '',
    created: false
  };
  submitted = false;

  constructor(private tournamentService: TournamentService, private router: Router) { }

  ngOnInit() {
  }

  signUpUserFunction() {
    const data = {
      userName: this.signUpUser.userName,
      emailAddress: this.signUpUser.emailAddress,
      password: this.signUpUser.password,
      userType: this.signUpUser.userType
    }
    this.tournamentService.signUp(data)
        .subscribe(
          response => {
            this.router.navigate([response])
          });
    this.submitted = true;
  }

  newUser() {
    this.submitted = false;
    this.signUpUser = {
      userName: '',
      emailAddress: '',
      password: '',
      userType: '',
      created: false
    };
  }
} 
