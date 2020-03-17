import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signUpForm',
  templateUrl: './signUpForm.component.html',
  styleUrls: ['./signUpForm.component.css']
})
export class SignUpFormComponent implements OnInit {
  user = {
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

  signUpUser() {
    const data = {
      userName: this.user.userName,
      emailAddress: this.user.emailAddress,
      password: this.user.password,
      userType: this.user.userType
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
    this.user = {
      userName: '',
      emailAddress: '',
      password: '',
      userType: '',
      created: false
    };
  }
} 
