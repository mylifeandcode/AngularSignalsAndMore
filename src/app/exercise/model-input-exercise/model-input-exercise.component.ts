import { NgClass } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-input-exercise',
  imports: [NgClass],
  templateUrl: './model-input-exercise.component.html',
  styleUrl: './model-input-exercise.component.scss'
})
export class ModelInputExerciseComponent {
  public lifeSupportOn = model(true);

  protected toggleLifeSupport(): void {
    if (this.lifeSupportOn())
      this.lifeSupportOn.set(false);
    else
      this.lifeSupportOn.set(true);
  }
}
