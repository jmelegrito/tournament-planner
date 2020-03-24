import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://tourney-planner.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}/getall`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getTourney(id) {
    return this.http.get(`${baseUrl}/tourney/${id}`);
  }
  
  getParticipants(id){
    return this.http.get(`${baseUrl}/participantList/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  join(id : number, data) {
    return this.http.put(`${baseUrl}/join/${id}`, data)
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  signUp(data) {
    return this.http.post(`${baseUrl}/sign-up`, data)
  }

  signIn(data) {
    return this.http.post(`${baseUrl}/sign-in`, data)
  }

  signOut() {
    return this.http.get(`${baseUrl}/sign-out`, {responseType: 'text'})
  }

}
