import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
    console.log(user)
    let userType = user.userType
    let userId = user.userId
    localStorage.setItem('user', userType)
    localStorage.setItem('id',userId)
  }

  public deleteUserInfo(){
    localStorage.removeItem('userInfo')
    localStorage.removeItem('user')
    localStorage.removeItem('tourneyChosen')
    localStorage.removeItem('id')
  }

  public validate(email, password) {
    return this.http.post('/api/authenticate', {'username' : email, 'password' : password}).toPromise()
  }
}