import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpFormComponent,
    SignInFormComponent,
    CreateTournamentFormComponent,
    CheckTournamentParentComponent,
    CheckTournamentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
