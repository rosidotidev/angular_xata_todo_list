import { Injectable } from '@angular/core';
import { XataApiClient } from '@xata.io/client';
import { secrets } from '../secrets'; // Importa il file secrets.ts
import { getXataClient } from "../xata";


@Injectable({
  providedIn: 'root',
})
export class XataService {
  

  xata:any;
  private currentUser: any = null;
  constructor() {
    // Usa le credenziali da secrets.ts
    this.xata = getXataClient();
  }

  isLoggedIn(): boolean {
    return this.currentUser!=null;
  }


  // Metodo per ottenere tutti i to-do
  async getTodos(filter:string) {
    if(filter=='all')
      return this.xata.db.prj_todo_item.sort('status','asc').getMany();
    else{
      let status=filter=='open'?0:1;
      return this.xata.db.prj_todo_item.filter('status',status).sort('status','asc').getMany();
    }
  }

  // Aggiunge un nuovo to-do
  async addTodo(description: string) {
    return this.xata.db.prj_todo_item.create({
      id: this.generateUniqueId(),
      description:description,
      user:this.currentUser.username
    });
  }

  // Aggiorna un to-do esistente
  async updateTodo(id: string, description: string) {
    return this.xata.db.prj_todo_item.update(id, { description,user:this.currentUser.username });
  }

  // Aggiorna un to-do esistente
  async updateTodoStatus(id: string, status: number) {
    return this.xata.db.prj_todo_item.update(id, { status:status });
  }

  // Elimina un to-do
  async deleteTodo(id: string) {
    return this.xata.db.prj_todo_item.delete(id);
  }
  
  async authenticateUser(username: string, password: string): Promise<boolean> {
    const users = await this.xata.db.prj_todo_user.filter({
      username,
      password, // Consigliato usare hashing per sicurezza
    })
    .select(['id', 'username'])
    .getMany();

    if (users.length > 0) {
      this.currentUser = users[0]; // Conserva il primo utente trovato
      return true;
    }

    return false;
  }
  async logout(){
    this.currentUser=null;
  }
  // Genera un ID univoco per nuovi item
  private generateUniqueId(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
