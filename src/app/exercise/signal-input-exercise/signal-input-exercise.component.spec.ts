import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputExerciseComponent } from './signal-input-exercise.component';

describe('SignalInputExerciseComponent', () => {
  let component: SignalInputExerciseComponent;
  let fixture: ComponentFixture<SignalInputExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
