import { Component, signal, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-push-with-signals-exercise',
  imports: [],
  templateUrl: './on-push-with-signals-exercise.component.html',
  styleUrl: './on-push-with-signals-exercise.component.scss'
})
export class OnPushWithSignalsExerciseComponent implements OnDestroy {
  public readonly currentTime = signal<string>(new Date().toLocaleTimeString());
  private _timer: ReturnType<typeof setInterval>;

  constructor() {
    this._timer = setInterval(() => {
      this.currentTime.set(new Date().toLocaleTimeString());
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (this._timer) {
      clearInterval(this._timer);
    }    
  }
}