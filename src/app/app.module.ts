import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpFormComponent } from './signUpForm/signUpForm.component';
import { SignInFormComponent } from './signInForm/signInForm.component';
import { CreateTournamentFormComponent } from './create-tournament-form/create-tournament-form.component';
import { CheckTournamentParentComponent } from './check-tournament-parent/check-tournament-parent.component';
import { CheckTournamentChildComponent } from './check-tournament-child/check-tournament-child.component';
import {SingleBracketComponent} from './single-bracket/single-bracket.component'
import {DisplayComponent} from './display/display.component'
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatchupComponent } from './matchup/matchup.component';
import {MatSelectModule} from '@angular/material/select';
import { ShowOrganizedTourneyComponent } from './show-organized-tourney/show-organized-tourney.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpFormComponent,
    SignInFormComponent,
    CreateTournamentFormComponent,
    CheckTournamentParentComponent,
    CheckTournamentChildComponent,
    SingleBracketComponent,
    DisplayComponent,
    MatchupComponent,
    ShowOrganizedTourneyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
