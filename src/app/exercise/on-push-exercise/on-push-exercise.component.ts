import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-push-exercise',
  imports: [],
  templateUrl: './on-push-exercise.component.html',
  styleUrl: './on-push-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushExerciseComponent implements OnDestroy {
  protected lastSystemCheck: string = 'NEVER';

  private _timer: ReturnType<typeof setInterval>;

  constructor() {
    this._timer = setInterval(() => {
      this.lastSystemCheck = new Date().toLocaleTimeString();
      console.log('Current Time: ', this.lastSystemCheck);
    }, 1000);
  }

  public systemCheck(): void {}

  public ngOnDestroy(): void {
    if (this._timer) {
      clearInterval(this._timer);
    }    
  }
}
