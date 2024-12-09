import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signal-input-exercise',
  imports: [],
  templateUrl: './signal-input-exercise.component.html',
  styleUrl: './signal-input-exercise.component.scss'
})
export class SignalInputExerciseComponent {
  public weaponsArmed = input<boolean>(false);
}
