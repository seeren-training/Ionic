import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public x: number;

  constructor() { }

  ngOnInit(): void {
    // Cross compatibility
    window.addEventListener("deviceorientation", (e) => this.x = e.beta);
  }

}
