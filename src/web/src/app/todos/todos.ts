import { Component, inject, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../models/todo';
import { catchError } from 'rxjs';

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
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);

          throw err;
        }),
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
