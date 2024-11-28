import { Component } from '@angular/core';
import { XataService } from './services/xata.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', // Questo deve corrispondere al tag usato nel file index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  constructor(private router: Router,private xataService: XataService) {}
  isLoggedIn(): boolean {
    return this.xataService.isLoggedIn();
  }
  logout() {
    
    this.xataService.logout();
    // Reindirizza alla pagina di login
    this.router.navigate(['/']);
  }
}

