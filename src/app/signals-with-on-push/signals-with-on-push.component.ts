import { Component } from '@angular/core';
import { SignalOnPushExampleComponent } from './signal-on-push-example/signal-on-push-example.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signals-with-on-push',
  imports: [SignalOnPushExampleComponent, RouterLink],
  templateUrl: './signals-with-on-push.component.html',
  styleUrl: './signals-with-on-push.component.scss'
})
export class SignalsWithOnPushComponent {

}
