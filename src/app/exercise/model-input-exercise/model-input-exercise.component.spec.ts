import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInputExerciseComponent } from './model-input-exercise.component';

describe('ModelInputExerciseComponent', () => {
  let component: ModelInputExerciseComponent;
  let fixture: ComponentFixture<ModelInputExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInputExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInputExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
