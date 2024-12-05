import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalOnPushExampleComponent } from './signal-on-push-example.component';

describe('SignalOnPushExampleComponent', () => {
  let component: SignalOnPushExampleComponent;
  let fixture: ComponentFixture<SignalOnPushExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalOnPushExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalOnPushExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
