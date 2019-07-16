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
  click$ = new Subject();
  clock;

  constructor(){
    Observable.merge(); // (2) We can use Observable.merge() when we want 1 stream or another to update the same thing

    Observable.interval(1000); // (1) I do want my Observable interval always running; I do want it to update every second, but I also want my clicks to be updating
    this.clock = this.click$.map(()=> new Date());  
  }

}
