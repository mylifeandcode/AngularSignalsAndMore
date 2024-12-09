import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushWithSignalsExerciseComponent } from './on-push-with-signals-exercise.component';

describe('OnPushWithSignalsExerciseComponent', () => {
  let component: OnPushWithSignalsExerciseComponent;
  let fixture: ComponentFixture<OnPushWithSignalsExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushWithSignalsExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushWithSignalsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
