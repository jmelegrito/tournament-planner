import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBracketUserViewComponent } from './single-bracket-user-view.component';

describe('SingleBracketUserViewComponent', () => {
  let component: SingleBracketUserViewComponent;
  let fixture: ComponentFixture<SingleBracketUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBracketUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBracketUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
