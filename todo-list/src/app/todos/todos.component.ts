import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { LoadingService } from '../shared/services/loading.service';
import { TodoService } from './shared/todo.service';
import { StateService } from './shared/state.service';
import { TodoFormService } from './shared/todo-form.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, AfterContentChecked {

  public url: String;

  constructor(
    private changeService: ChangeDetectorRef,
    private routerService: Router,
    public titleService: Title,
    public locationService: Location,
    public loadingService: LoadingService,
    private todoService: TodoService,
    private todoFormService: TodoFormService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.routerService.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.titleService.setTitle("Todo's");
          this.url = this.routerService.url;
        }
      }
    );
  }

  ngAfterContentChecked(): void {
    this.changeService.detectChanges();
  }

  done(): void {
    this.stateService.done(this.todoService.todo).subscribe(() => this.routerService.navigate(['/']))
  }

  doing(): void {
    if (this.todoFormService.form.valid) {
      this.stateService.doing().subscribe(() => this.routerService.navigate(['/']))
    }
  }

}
