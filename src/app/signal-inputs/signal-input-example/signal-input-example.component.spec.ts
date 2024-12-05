import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputExampleComponent } from './signal-input-example.component';

describe('SignalInputExampleComponent', () => {
  let component: SignalInputExampleComponent;
  let fixture: ComponentFixture<SignalInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
