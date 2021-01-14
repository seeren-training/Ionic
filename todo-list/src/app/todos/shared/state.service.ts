import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoadingService } from 'src/app/shared/services/loading.service';
import { State } from './state.enum.model';
import { Todo } from './todo.model';
import { TodoFormService } from './todo-form.service';
import { TodoService } from './todo.service';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private todo: TodoService,
    private todoForm: TodoFormService,
    private loading: LoadingService
  ) { }

  doing() {
    const todo = new Todo();
    todo.name = this.todoForm.form.get('name').value;
    todo.description = this.todoForm.form.get('description').value;
    todo.state = State.DOING;
    return this.todo.post(todo).pipe(tap(() => this.todoForm.form.reset()));
  }

  done(todo: Todo): Observable<Todo> {
    if (State.DONE === todo.state) {
      return this.todo.delete(todo);
    }
    todo.state = State.DONE;
    this.loading.start();
    return this.todo.put(this.todo.todo).pipe(tap(
      () => this.loading.stop(),
      () => todo.state = State.DOING,
    ));
  }

}
