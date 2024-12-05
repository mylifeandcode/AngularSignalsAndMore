import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signal-input-example',
  imports: [],
  templateUrl: './signal-input-example.component.html',
  styleUrl: './signal-input-example.component.scss'
})
export class SignalInputExampleComponent {
  userName = input('', { transform: toUpperCase })
}

function toUpperCase(value: string | undefined): string {
  return value?.toUpperCase() ?? '';
}

