import { Component } from '@angular/core';

@Component({//Takes a js object as a parameter
  selector: 'app-root', //selector for the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion'; //Angular app will display this in the browser
}
