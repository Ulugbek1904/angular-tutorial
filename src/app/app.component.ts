import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    `,
  styles: [`
    main {
      padding: 20px;
      background-color: #f0f0f0;
    }`],
})
export class AppComponent {
  title = 'just';
}
