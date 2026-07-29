import { Service } from '@angular/core';
import { Todo } from '../models/todo';

@Service()
export class Todos {
  todoItems: Array<Todo> = [
    {
      id: 0,
      title: 'groceries',
      userId: 1,
      completed: false,
    },
    {
      id: 1,
      title: 'car wash',
      userId: 1,
      completed: false,
    },
  ];
}
