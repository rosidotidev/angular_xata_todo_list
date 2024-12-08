import { Injectable } from '@angular/core';
import { XataApiClient } from '@xata.io/client';
import { secrets } from '../secrets'; // Import secrets.ts file
import { getXataClient } from "../xata";

@Injectable({
  providedIn: 'root',
})
export class XataService {
  xata: any;
  private currentUser: any = null;

  constructor() {
    // Use credentials from secrets.ts
    this.xata = getXataClient();
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  // Method to fetch all to-dos
  async getTodos(filter: string) {
    if (filter == 'all')
      return this.xata.db.prj_todo_item.sort('status', 'asc').getMany();
    else {
      let status = filter == 'open' ? 0 : 1;
      return this.xata.db.prj_todo_item
        .filter('status', status)
        .sort('status', 'asc')
        .getMany();
    }
  }

  // Adds a new to-do
  async addTodo(description: string) {
    return this.xata.db.prj_todo_item.create({
      id: this.generateUniqueId(),
      description: description,
      user: this.currentUser.username,
    });
  }

  // Updates an existing to-do
  async updateTodo(id: string, description: string) {
    return this.xata.db.prj_todo_item.update(id, { description, user: this.currentUser.username });
  }

  // Updates the status of an existing to-do
  async updateTodoStatus(id: string, status: number) {
    return this.xata.db.prj_todo_item.update(id, { status: status });
  }

  // Deletes a to-do
  async deleteTodo(id: string) {
    return this.xata.db.prj_todo_item.delete(id);
  }

  // Authenticates a user
  async authenticateUser(username: string, password: string): Promise<boolean> {
    const users = await this.xata.db.prj_todo_user
      .filter({
        username,
        password, // Recommended to use hashing for security
      })
      .select(['id', 'username'])
      .getMany();

    if (users.length > 0) {
      this.currentUser = users[0]; // Stores the first user found
      return true;
    }

    return false;
  }

  // Logs out the current user
  async logout() {
    this.currentUser = null;
  }

  // Generates a unique ID for new items
  private generateUniqueId(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
