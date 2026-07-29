import { Component, inject, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class TodosManagement {
  todoService = inject(Todos);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoItems.set(this.todoService.todoItems);
  }
}
