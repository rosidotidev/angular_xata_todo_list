import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Esegui qui eventuali verifiche sulle credenziali (mock o chiamata API)
    if (this.username && this.password) {
      // Naviga alla pagina della todo list
      this.router.navigate(['/todos']);
    } else {
      alert('Please enter both username and password');
    }
  }
}
