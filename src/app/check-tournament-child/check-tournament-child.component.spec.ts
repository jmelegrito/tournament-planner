import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTournamentChildComponent } from './check-tournament-child.component';

describe('CheckTournamentChildComponent', () => {
  let component: CheckTournamentChildComponent;
  let fixture: ComponentFixture<CheckTournamentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTournamentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTournamentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
