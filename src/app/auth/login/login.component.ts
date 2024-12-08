import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { XataService } from '../../services/xata.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private xataService: XataService) {}

  async onLogin() {
    // Perform any credential checks here (mock or API call)
    if (this.username && this.password) {
      // Navigate to the todo list page
      let auth = await this.xataService.authenticateUser(this.username, this.password);
      if (auth) {
        this.router.navigate(['/todos']);
      } else {
        alert('Wrong username or password');
      }
    } else {
      alert('Please enter both username and password');
    }
  }
}
