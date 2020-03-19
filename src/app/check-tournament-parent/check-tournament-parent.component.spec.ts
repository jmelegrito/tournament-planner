import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTournamentParentComponent } from './check-tournament-parent.component';

describe('CheckTournamentParentComponent', () => {
  let component: CheckTournamentParentComponent;
  let fixture: ComponentFixture<CheckTournamentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTournamentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTournamentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
