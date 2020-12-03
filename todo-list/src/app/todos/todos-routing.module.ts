import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'new',
        component: TodoComponent
      },
      {
        path: ':name',
        component: TodoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TodosRoutingModule { }
