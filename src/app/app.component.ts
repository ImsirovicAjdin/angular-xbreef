import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
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
    /* (3) So we'll say this.click$, because Subject is a type of observable, and we'll say Observable.interval; so we're saying, 'let either one of these be able to map to a new Date'
    Observable.merge(
        this.click$,
        Observable.interval(1000)
    ).map(()=> new Date());
    */

    // (4) and then I can take my clock and assign that to that new stream of merge
    this.clock = Observable.merge(
        this.click$,
        Observable.interval(5000) // (5) and to show this off I'll change the interval to 5s
    ).map(()=> new Date());
  }
  // (6) so we have those 2 streams working for us, whenever I click -- (this.click$) --, or
  // whenever 5s passes -- (Observable.interval(5000)) -- my clock will now update
}
