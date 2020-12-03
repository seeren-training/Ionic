import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Todo } from './todo.model';
import { State } from './state.enum.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public form: FormGroup;

  public todo: Todo;

  public todoList: Todo[];

  /**
   * @param http 
   */
  constructor(
    private builderService: FormBuilder,
    private http: HttpClient,
    private loading: LoadingService
  ) {
    this.form = this.builderService.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  /**
   * @returns Observable<Todo[]>
   */
  get(): Observable<Todo[]> {
    if (this.todoList) {
      return of(this.todoList);
    }
    this.loading.start();
    return this.http
      .get<Todo[]>(environment.jsonbin.url, {
        headers: new HttpHeaders({ "secret-key": environment.jsonbin.key })
      })
      .pipe(
        tap((todoList: Todo[]) => {
          this.loading.stop();
          this.todoList = todoList;
        })
      );
  }

  /**
   * @param todo 
   */
  post(todo: Todo): Observable<Todo[]> {
    this.todoList.push(todo);
    this.loading.start();
    return this.put(this.todoList).pipe(
      tap(
        () => this.loading.stop(),
        () => this.todoList.pop(),
      )
    );
  }

  /**
   * @param todoList 
   */
  private put(todoList: Todo[]): Observable<Todo[]> {
    return this.http
      .put<Todo[]>(environment.jsonbin.url, todoList, {
        headers: new HttpHeaders({
          "secret-key": environment.jsonbin.key,
          "versioning": "false",
          "Content-Type": "application/json"
        })
      });
  }

  /**
   * @param todo 
   */
  delete(todo: Todo) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    this.loading.start();
    return this.put(this.todoList).pipe(
      tap(
        () => this.loading.stop(),
        () => this.todoList.splice(index, 0, todo)
      )
    );
  }

  doing() {
    const todo: Todo = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      state: State.DOING
    };
    return this.post(todo).pipe(tap(() => this.form.reset()));
  }

  done(todo: Todo): Observable<Todo[]> {
    if (State.DONE == todo.state) {
      return this.delete(todo);
    }
    todo.state = State.DONE;
    this.loading.start();
    return this.put(this.todoList).pipe(
      tap(
        () => this.loading.stop(),
        () => todo.state = State.DOING,
      )
    );
  }

  /**
   * @param name 
   */
  findByName(name: string): Todo {
    return this.todo = this.todoList.find((todo: Todo) => name === todo.name);
  }

}
