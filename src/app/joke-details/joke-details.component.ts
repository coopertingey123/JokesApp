import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../interfaces/joke';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.scss']
})
export class JokeDetailsComponent implements OnInit {

  @Input() joke?: Joke;

  constructor() { }

  ngOnInit(): void {
    
  }

}
