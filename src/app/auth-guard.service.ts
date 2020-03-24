import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService : AuthService, public route : Router) { }

  canActivate(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    this.route.navigate(['']);
    return false;
  }
}