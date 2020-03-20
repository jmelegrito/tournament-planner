import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrganizedTourneyComponent } from './show-organized-tourney.component';

describe('ShowOrganizedTourneyComponent', () => {
  let component: ShowOrganizedTourneyComponent;
  let fixture: ComponentFixture<ShowOrganizedTourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrganizedTourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrganizedTourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
