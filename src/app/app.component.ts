// Hande click events with Subjects

import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="click$.next()">Update</button>
    <h1>{{clock | async | date: 'MMM d, y, h:mm:ss a'}}</h1>
  `
})
export class AppComponent  {
  /*
  To resolve this for now, I'll create something called a 'Subject', and this will be a new Subject. 
  What Subject will allow me to do is call .next every time I click the button.
  And what .next is gonna do is basically push the stream forward 1 tick.
  So if I just take out all of this clock stuff, which was just going every second before, and now I say, this.clock is this.click$, and I'm gonna map those clicks to a new Date.
  */
  click$ = new Subject();

  clock;

  constructor(){
    this.clock = this.click$.map(()=> new Date());  
  }

}
