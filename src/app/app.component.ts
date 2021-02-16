import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fire-dashboard-template';

  printUser(event: any): void {
    console.log('event::user', event);
  }

  printError(event: any): void {
    console.log('event::error', event);
  }
}
