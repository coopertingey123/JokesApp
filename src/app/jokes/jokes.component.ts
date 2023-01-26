import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message-service/message.service';
import { Joke } from '../interfaces/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {

  constructor(private messageService: MessageService, private http: HttpClient){}

  jokes: Joke[] = [];

  selectedJoke!: Joke;

  addJoke: boolean = false;
  newJoke: string = "";

  ngOnInit(): void {
    this.getJoke();
  }

  onSelect(joke: Joke): void {
    this.selectedJoke = joke;
    this.messageService.add(`Selected joke to edit with joke id: ${joke.id}`);
  }

  getJoke(){
    let headers = new HttpHeaders({});
    this.http.get<any>('https://api.chucknorris.io/jokes/random', {
      headers: headers
    }).subscribe((data) => {
      this.jokes.push(data);
      this.messageService.add(`Fetched joke: ${data.id}`);
    })
  }

  postJoke(jokeVal: string){

    let newJokeObj = {
      created_at: '1/1/23',
      icon_url: 'new_url',
      id: '1234',
      updated_at: '1/1/23',
      url: 'myNewString.com',
      value: jokeVal
    };

    this.jokes.push(newJokeObj);
  }

  selectAddJoke() {
    this.addJoke = true;
  }

  removeJoke(id: string) {
    this.jokes = this.jokes.filter((joke) => joke.id !== id)
  }

}
