// Hande click events with Subjects

import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="onClick()">Update</button>               <!-- (2) -->
    <h1>{{clock | async | date: 'MMM d, y, h:mm:ss a'}}</h1>
  `
})
export class AppComponent  {
  onClick() {
    
  }
  
  clock = Observable
      .interval(1000)
      .map(()=> new Date());

  // Make Observable from event, then find the event and pass in the name you wanna listen to;
  // So we have these 2 conflicting approaches where we want to find an event (1), or handle event in HTML (2):
  constructor(){
    Observable.fromEvent(, 'click') // (1)
  }

}
