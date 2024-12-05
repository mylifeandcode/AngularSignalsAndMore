import { Component } from '@angular/core';
import { SignalInputExampleComponent } from './signal-input-example/signal-input-example.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signal-inputs',
  imports: [SignalInputExampleComponent, RouterLink],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.scss'
})
export class SignalInputsComponent {

}
