import { Component, inject, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../models/todo';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class TodosManagement {
  todoService = inject(Todos);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

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

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if(todo.id === todoItem.id) {
          return {
            ... todo,
            completed: !todo.completed
          }
        }

        return todo;
      })
    })
  }
}
