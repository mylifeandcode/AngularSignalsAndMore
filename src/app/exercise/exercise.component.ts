import { Component, WritableSignal, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarshipService } from './starship.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { OnPushExerciseComponent } from './on-push-exercise/on-push-exercise.component';
import { OnPushWithSignalsExerciseComponent } from './on-push-with-signals-exercise/on-push-with-signals-exercise.component';
import { SignalInputExerciseComponent } from './signal-input-exercise/signal-input-exercise.component';
import { ModelInputExerciseComponent } from './model-input-exercise/model-input-exercise.component';

@Component({
  selector: 'app-exercise',
  imports: [RouterLink, NgClass, NgOptimizedImage,
    OnPushExerciseComponent, OnPushWithSignalsExerciseComponent, SignalInputExerciseComponent, ModelInputExerciseComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent {
  protected powerOn: WritableSignal<boolean>;
  protected onAlert: WritableSignal<boolean> = signal(false);
  protected shieldStatus = computed(() => this.onAlert() ? 'UP' : 'DOWN');
  protected weaponsArmed: WritableSignal<boolean> = signal(false);
  protected lifeSupportEnabled: WritableSignal<boolean> = signal(true);
  private _starshipService: StarshipService = inject(StarshipService);

  constructor() {
    this.powerOn = this._starshipService.power;
  }

  public toggelPower(): void {
    if (this.powerOn())
      this._starshipService.powerOff();
    else
      this._starshipService.powerOn();
  }

  public shipStatusChange($event: Event): void {
    const target = $event.target as HTMLSelectElement;
    this.onAlert.set(target.value != 'N');
    this.weaponsArmed.set(target.value == 'R');
  }

  public overrideLifeSupport(): void {
    if (this.lifeSupportEnabled())
      this.lifeSupportEnabled.set(false);
    else
      this.lifeSupportEnabled.set(true);
  }
}
