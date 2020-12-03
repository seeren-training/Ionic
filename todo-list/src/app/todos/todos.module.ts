import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TodosRoutingModule,
  ],
})
export class TodosModule { }
