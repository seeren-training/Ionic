import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { LoadingService } from 'src/app/shared/services/loading.service';
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

  /**
   * @param todoService 
   */
  constructor(
    public loadingService: LoadingService,
    private titleService: Title,
    private routeService: ActivatedRoute,
    private routerService: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Todo");
    this.todoService.get().subscribe(
      () => {
        const name = this.routeService.snapshot.params.name;
        if (!name) {
          this.form = this.todoService.form;
        } else if (!(this.todo = this.todoService.findByName(name))) {
          this.routerService.navigate(["/"]);
        }
      });
  }

}
