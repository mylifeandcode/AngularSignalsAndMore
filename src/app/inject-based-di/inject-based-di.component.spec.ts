import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectBasedDIComponent } from './inject-based-di.component';

describe('InjectBasedDIComponent', () => {
  let component: InjectBasedDIComponent;
  let fixture: ComponentFixture<InjectBasedDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectBasedDIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectBasedDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
