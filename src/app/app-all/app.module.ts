import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokesComponent } from '../jokes/jokes.component';
import { JokeDetailsComponent } from '../joke-details/joke-details.component';
import { MessagesComponent } from '../messages/messages.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeDetailsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
