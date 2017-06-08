import { Component } from '@angular/core';

import { DummyService } from './shared';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor(private dummy: DummyService) {
    this.title = this.dummy.title;
  }
}
