import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Questo deve corrispondere al tag usato nel file index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
}

