import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsagingComponent } from './paymentsaging.component';

describe('PaymentsagingComponent', () => {
  let component: PaymentsagingComponent;
  let fixture: ComponentFixture<PaymentsagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
