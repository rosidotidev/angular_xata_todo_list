import { Component, OnInit } from '@angular/core';
import { XataService } from '../../services/xata.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  currentDescription: string = ''; // Field for the new to-do or for editing
  todos: any[] = []; // Array for data
  isEditing: boolean = false; // Flag for edit mode
  editId: string | null = null; // ID of the to-do being edited
  selectedTodo:any;

  constructor(private xataService: XataService) {}

  ngOnInit(): void {
    this.loadTodos(); // Load the to-dos at initialization
  }

  // Retrieve all to-dos from the Xata database
  async loadTodos() {
    try {
      this.todos = await this.xataService.getTodos();
    } catch (error) {
      console.error('Error loading to-dos:', error);
    }
  }

  // Save a new to-do or update an existing one
  async saveTodo() {
    try {
      if (this.isEditing && this.editId) {
        // Edit an existing to-do
        await this.xataService.updateTodo(this.editId, this.currentDescription);
      } else {
        // Add a new to-do
        await this.xataService.addTodo(this.currentDescription);
      }
      this.resetForm();
      await this.loadTodos(); // Reload the to-do list
    } catch (error) {
      console.error('Error saving the to-do:', error);
    }
  }

  // Set a to-do in edit mode
  editTodo(todo: any) {
    if(!this.isEditing || this.editId != todo.id){
      this.isEditing = true;
      this.currentDescription = todo.description;
      this.editId = todo.id;
      this.selectedTodo = todo;
    } else {
      this.resetForm();
    }
  }

  // Delete a to-do from the database
  async deleteTodo(id: string) {
    try {
      this.resetForm();
      await this.xataService.deleteTodo(id);
      await this.loadTodos(); // Reload the list after deletion
    } catch (error) {
      console.error('Error deleting the to-do:', error);
    }
  }

  // Reset the form
  resetForm() {
    this.currentDescription = '';
    this.isEditing = false;
    this.editId = null;
    this.selectedTodo = null;
  }
}
