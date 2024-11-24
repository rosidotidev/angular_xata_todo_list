import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './todos/list/list.component';

// Configura le rotte dell'applicazione
const appRoutes: Routes = [
  { path: '', component: LoginComponent }, // La home è il login
  { path: 'todos', component: ListComponent } // Naviga alla todo list dopo il login
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Necessario per Angular Material
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbar,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes) // Importa e configura RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
