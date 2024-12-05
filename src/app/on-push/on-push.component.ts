import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnPushExampleComponent } from './on-push-example/on-push-example.component';

@Component({
  selector: 'app-on-push',
  imports: [RouterLink, OnPushExampleComponent],
  templateUrl: './on-push.component.html',
  styleUrl: './on-push.component.scss'
})
export class OnPushComponent {

  public childComponentInputValue: number = 0;

  public incrementChildComponentInput(): void {
    this.childComponentInputValue++;
  }
}
