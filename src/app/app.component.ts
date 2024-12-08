import { Component } from '@angular/core';
import { XataService } from './services/xata.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', // This must match the tag used in the index.html file
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  constructor(private router: Router, private xataService: XataService) {}

  isLoggedIn(): boolean {
    return this.xataService.isLoggedIn();
  }

  logout() {
    this.xataService.logout();
    // Redirect to the login page
    this.router.navigate(['/']);
  }
}
