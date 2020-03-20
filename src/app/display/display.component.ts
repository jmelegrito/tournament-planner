import { Component, OnInit, ViewChild } from '@angular/core';
import { TournamentService } from '../tournament.service'
import { Router } from '@angular/router'
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface userDisplay {
  userName: string;
  userType: string; 
  tournamentHosted: string;
  tournamentJoined: string;
}

const ELEMENT_DATA: userDisplay[] = [
  {userName: 'test', userType: 'single-elimination', tournamentHosted: 'tourney 1', tournamentJoined: 'tourney a'},
  {userName: 'test2', userType: 'single-elimination', tournamentHosted: 'tourney 2', tournamentJoined: 'tourney b'},  
  {userName: 'test3', userType: 'single-elimination', tournamentHosted: 'tourney 3', tournamentJoined: 'tourney c'},  
  {userName: 'test4', userType: 'single-elimination', tournamentHosted: 'tourney 4', tournamentJoined: 'tourney d'},
  ];


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'userType', 'tournamentHosted', 'tournamentJoined'];
  dataSource = ELEMENT_DATA

  constructor(private tournamentService: TournamentService, private router: Router,) { }

  ngOnInit() {

  }
}
