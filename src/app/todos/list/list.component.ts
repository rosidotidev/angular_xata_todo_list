import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  newTodo: string = '';
  currentTodo: string = '';
  isEditing: boolean = false;
  editIndex: number | null = null;

  todos: any[] = [
    { name: 'Sample Item 1' },
    { name: 'Sample Item 2' }
  ];

  // Salva o aggiorna un item
  saveTodo() {
    if (this.isEditing && this.editIndex !== null) {
      // Aggiorna l'item esistente
      this.todos[this.editIndex].name = this.currentTodo;
      this.resetForm();
    } else if (this.currentTodo.trim()) {
      // Aggiungi un nuovo item
      this.todos.push({ name: this.currentTodo });
      this.resetForm();
    }
  }

  // Abilita la modifica di un item esistente
  editTodo(todo: any, index: number) {
    this.isEditing = true;
    this.currentTodo = todo.name;
    this.editIndex = index;
  }

  // Elimina un item
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    // Reset della form se si stava modificando l'item cancellato
    if (this.isEditing && this.editIndex === index) {
      this.resetForm();
    }
  }

  // Reset del campo input e stato di modifica
  resetForm() {
    this.currentTodo = '';
    this.isEditing = false;
    this.editIndex = null;
  }
}
