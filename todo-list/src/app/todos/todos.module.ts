import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
