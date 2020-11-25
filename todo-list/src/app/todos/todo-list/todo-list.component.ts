import { Component } from '@angular/core';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {

  public todoList: Todo[];

  /**
   * @param todoService 
   */
  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.todoList;
  }

  /**
   * @param todo 
   */
  delete(todo: Todo): Todo {
    return this.todoService.delete(todo);
  }

}
