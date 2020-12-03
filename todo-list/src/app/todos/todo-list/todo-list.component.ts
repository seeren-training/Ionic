import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[];

  constructor(
    public loadingService: LoadingService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.show();
  }

  show(): void {
    this.todoService.get().subscribe((todoList: Todo[]) => this.todoList = todoList);
  }

}
