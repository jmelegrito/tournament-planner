import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signInForm',
  templateUrl: './signInForm.component.html',
  styleUrls: ['./signInForm.component.css']
})
export class SignInFormComponent implements OnInit {
  signInUser = {
    userName: '',
    password: '',
  };

  constructor(private tournamentService: TournamentService, private router: Router, private authService: AuthService) { }

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
            this.authService.setUserInfo(response)
            this.router.navigate(['home'])
          });
  }
}
