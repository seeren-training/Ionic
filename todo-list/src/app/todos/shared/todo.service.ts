import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoList: Todo[] = [];

  constructor() {
    this.todoList.push(
      { name: 'First TODO', description: 'First TODO description' },
      { name: 'Second TODO', description: 'Second TODO description' },
    );
  }

  /**
   * @param todo 
   */
  delete(todo: Todo): Todo {
    const index = this.todoList.indexOf(todo);
    if (-1 !== index) {
      this.todoList.splice(index, 1);
    }
    return todo;
  }

  /**
   * @param todo 
   */
  post(todo: Todo): Todo {
    if (-1 === this.todoList.indexOf(todo)) {
      this.todoList.push(todo);
    }
    return todo;
  }


}
