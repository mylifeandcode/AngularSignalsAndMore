import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushExampleComponent } from './on-push-example.component';

describe('OnPushExampleComponent', () => {
  let component: OnPushExampleComponent;
  let fixture: ComponentFixture<OnPushExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
