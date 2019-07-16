import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{clock | async | date: 'MMM d, y, h:mm:ss a'}}</h1>
  `
})
export class AppComponent  {
  clock = Observable
      .interval(1000)
      .map(()=> new Date());
}
