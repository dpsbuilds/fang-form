import { inject, Service } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Service()
export class Todos {
  http = inject(HttpClient);
  
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    return this.http.get<Array<Todo>>(url);
  }
}
