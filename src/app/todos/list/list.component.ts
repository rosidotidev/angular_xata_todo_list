import { Component, OnInit } from '@angular/core';
import { XataService } from '../../services/xata.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  currentDescription: string = ''; // Campo per il nuovo to-do o per la modifica
  todos: any[] = []; // Array per i dati
  isEditing: boolean = false; // Flag per la modalità modifica
  editId: string | null = null; // ID del to-do in modifica
  selectedTodo:any;

  constructor(private xataService: XataService) {}

  ngOnInit(): void {
    this.loadTodos(); // Carica i to-do all'inizio
  }

  // Recupera tutti i to-do dal database Xata
  async loadTodos() {
    try {
      this.todos = await this.xataService.getTodos();
    } catch (error) {
      console.error('Errore nel caricamento dei to-do:', error);
    }
  }

  // Salva un nuovo to-do o aggiorna uno esistente
  async saveTodo() {
    try {
      if (this.isEditing && this.editId) {
        // Modifica un to-do esistente
        await this.xataService.updateTodo(this.editId, this.currentDescription);
      } else {
        // Aggiunge un nuovo to-do
        await this.xataService.addTodo(this.currentDescription);
      }
      this.resetForm();
      await this.loadTodos(); // Ricarica la lista dei to-do
    } catch (error) {
      console.error('Errore nel salvataggio del to-do:', error);
    }
  }

  // Imposta un to-do in modalità modifica
  editTodo(todo: any) {
    this.isEditing = true;
    this.currentDescription = todo.description;
    this.editId = todo.id;
    this.selectedTodo=todo;
  }

  // Elimina un to-do dal database
  async deleteTodo(id: string) {
    try {
      await this.xataService.deleteTodo(id);
      await this.loadTodos(); // Ricarica la lista dopo l'eliminazione
    } catch (error) {
      console.error('Errore nella cancellazione del to-do:', error);
    }
  }

  // Resetta il form
  resetForm() {
    this.currentDescription = '';
    this.isEditing = false;
    this.editId = null;
    this.selectedTodo=null;
  }
}
