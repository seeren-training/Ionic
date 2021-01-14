import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private nav: NavController
  ) { }


  ngOnInit(): void {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   alert('Handler was called!');
    //   this.nav.back();
    // });
  }

}
