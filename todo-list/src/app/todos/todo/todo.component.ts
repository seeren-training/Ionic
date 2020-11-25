import { Component } from '@angular/core';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {

  /**
   * @param todoService 
   */
  constructor(private todoService: TodoService) { }

  /**
   * @param name 
   * @param description 
   */
  public save(name: string, description: string): Todo {
    return this.todoService.post({
      name: name,
      description: description
    });
  }

}
