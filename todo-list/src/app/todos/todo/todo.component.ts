import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { LoadingService } from 'src/app/shared/services/loading.service';
import { TodoFormService } from '../shared/todo-form.service';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public form: FormGroup;

  public todo: Todo;

  constructor(
    public loadingService: LoadingService,
    private titleService: Title,
    private routeService: ActivatedRoute,
    private routerService: Router,
    private todoService: TodoService,
    private todoFormService: TodoFormService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Todo");
    let name: string = null;
    this.todoService.get().subscribe(() => {
      if (!(name = this.routeService.snapshot.params.name)) {
        this.form = this.todoFormService.form;
      } else if (!(this.todo = this.todoService.findByName(name))) {
        this.routerService.navigate(["/"]);
      }
    });
  }

}
