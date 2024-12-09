import { Component, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarshipService } from './starship.service';
import { NgClass } from '@angular/common';
import { OnPushExerciseComponent } from './on-push-exercise/on-push-exercise.component';
import { OnPushWithSignalsExerciseComponent } from './on-push-with-signals-exercise/on-push-with-signals-exercise.component';

@Component({
  selector: 'app-exercise',
  imports: [RouterLink, NgClass, OnPushExerciseComponent, OnPushWithSignalsExerciseComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent {
  protected powerOn: WritableSignal<boolean>;
  
  constructor(private _starshipService: StarshipService) { //TODO: Remove constructor injection and use new inject method
    this.powerOn = this._starshipService.power;
  }

  public toggelPower(): void {
    if (this.powerOn())
      this._starshipService.powerOff();
    else
      this._starshipService.powerOn();
  }

  public shipStatusChange($event: any): void {
    window.alert('You should do something here.');
  }
}
