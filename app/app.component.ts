import { Component } from '@angular/core';

@Component({
  selector: 'st-hello',
  template: `<h1>{{title}}</h1>`
})
export class AppComponent {
  title = 'Angular 7';
}
