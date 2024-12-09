import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushExerciseComponent } from './on-push-exercise.component';

describe('OnPushExerciseComponent', () => {
  let component: OnPushExerciseComponent;
  let fixture: ComponentFixture<OnPushExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
