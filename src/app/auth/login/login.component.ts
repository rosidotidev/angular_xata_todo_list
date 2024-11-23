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

  constructor(private router: Router,private xataService: XataService) {}

  async onLogin() {
    // Esegui qui eventuali verifiche sulle credenziali (mock o chiamata API)
    if (this.username && this.password) {
      // Naviga alla pagina della todo list
      let auth=await this.xataService.authenticateUser(this.username, this.password);
      if(auth){
		this.router.navigate(['/todos']);
	  }else{
		alert('Wrong username or password');
	  }
    } else {
      alert('Please enter both username and password');
    }
  }
}
