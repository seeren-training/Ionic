import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private subject: Subject<boolean> = new Subject();

  public state: boolean = false;

  public observable: Observable<boolean> = this.subject.asObservable();

  start(): boolean {
    return this.next(true);
  }

  stop(): boolean {
    return this.next(false);
  }

  next(state: boolean): boolean {
    if (state !== this.state) {
      this.state = state;
      this.subject.next(this.state);
      return true;
    }
    return false;
  }

}
