import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { LoadingService } from 'src/app/shared/services/loading.service';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todo: Todo;

  public todoList: Todo[];

  constructor(
    private http: HttpClient,
    private loading: LoadingService
  ) { }

  get(): Observable<Todo[]> {
    if (this.todoList) {
      return of(this.todoList);
    }
    this.loading.start();
    return this.http
      .get<Todo[]>(environment.api.url)
      .pipe(tap((todoList: Todo[]) => {
        this.loading.stop();
        this.todoList = todoList;
      }));
  }

  post(todo: Todo): Observable<Todo> {
    this.todoList.push(todo);
    this.loading.start();
    return this.http.post<Todo>(environment.api.url, todo).pipe(tap(
      () => this.loading.stop(),
      () => this.todoList.pop(),
    ));
  }

  put(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.api.url}${todo.id}`, todo);
  }

  delete(todo: Todo): Observable<Todo> {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    this.loading.start();
    return this.http.delete<Todo>(`${environment.api.url}${todo.id}`).pipe(tap(
      () => this.loading.stop(),
      () => this.todoList.splice(index, 0, todo)
    ));
  }

  findByName(name: string): Todo {
    return this.todo = this.todoList.find((todo: Todo) => name === todo.name);
  }

}
