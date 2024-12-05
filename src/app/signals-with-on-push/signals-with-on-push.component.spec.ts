import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithOnPushComponent } from './signals-with-on-push.component';

describe('SignalsWithOnPushComponent', () => {
  let component: SignalsWithOnPushComponent;
  let fixture: ComponentFixture<SignalsWithOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsWithOnPushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsWithOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
