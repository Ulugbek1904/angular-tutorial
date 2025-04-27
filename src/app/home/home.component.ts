import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { HeaderComponent } from '../components/header/header.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('Welcome to my first Angular app! hahahaah');

  keyUpHandler(event: KeyboardEvent) {
    console.log('Key pressed:', event.key); 
  }
}
