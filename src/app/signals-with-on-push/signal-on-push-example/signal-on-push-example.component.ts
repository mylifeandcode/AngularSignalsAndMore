import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-signal-on-push-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './signal-on-push-example.component.html',
  styleUrl: './signal-on-push-example.component.scss'
})
export class SignalOnPushExampleComponent implements OnDestroy {
  public readonly currentTime = signal<string>(new Date().toLocaleTimeString());
  private _timer: ReturnType<typeof setInterval>;

  constructor() {
    this._timer =  setInterval(() => {
      this.currentTime.set(new Date().toLocaleTimeString());
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (this._timer) {
      clearInterval(this._timer);
    }    
  }
}
