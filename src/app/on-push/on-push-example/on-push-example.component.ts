import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-push-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './on-push-example.component.html',
  styleUrl: './on-push-example.component.scss'
})
export class OnPushExampleComponent implements OnDestroy {
  @Input()
  myInputValue: number = 0;

  public myNonInputValue: number = 0;
  public currentTime = new Date().toLocaleTimeString();

  private _timer: ReturnType<typeof setInterval>;

  constructor() {
    this._timer = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
      console.log('Current Time: ', this.currentTime);
    }, 1000);
  }

  public incrementNonInputValue(): void {
    this.myNonInputValue++;
  }

  public ngOnDestroy(): void {
    if (this._timer) {
      clearInterval(this._timer);
    }    
  }
}
