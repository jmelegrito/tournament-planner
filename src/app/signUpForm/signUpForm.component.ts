import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

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
  };

  constructor(public tournamentService: TournamentService, public router: Router, public authService: AuthService) { }

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
            this.authService.setUserInfo(response)
            this.router.navigate(['home'])
          });
  }
} 
