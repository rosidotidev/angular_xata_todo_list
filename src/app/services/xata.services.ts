import { Injectable } from '@angular/core';
import { XataApiClient } from '@xata.io/client';
import { secrets } from '../secrets'; // Importa il file secrets.ts
import { getXataClient } from "../xata";


@Injectable({
  providedIn: 'root',
})
export class XataService {

  xata:any;
  constructor() {
    // Usa le credenziali da secrets.ts
    this.xata = getXataClient();
  }

  // Metodo per ottenere tutti i to-do
  async getTodos() {
    return this.xata.db.prj_todo_item.getMany();
  }

  // Aggiunge un nuovo to-do
  async addTodo(description: string) {
    return this.xata.db.prj_todo_item.create({
      id: this.generateUniqueId(),
      description,
    });
  }

  // Aggiorna un to-do esistente
  async updateTodo(id: string, description: string) {
    return this.xata.db.prj_todo_item.update(id, { description });
  }

  // Elimina un to-do
  async deleteTodo(id: string) {
    return this.xata.db.prj_todo_item.delete(id);
  }
  
  async authenticateUser(username: string, password: string): Promise<boolean> {
    const users = await this.xata.db.prj_todo_user.filter({
      username,
      password, // Considera l'hashing per sicurezza
    }).getMany();

    return users.length > 0;
  }

  // Genera un ID univoco per nuovi item
  private generateUniqueId(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
