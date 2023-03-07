import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendCreditComponent } from './vend-credit.component';

describe('VendCreditComponent', () => {
  let component: VendCreditComponent;
  let fixture: ComponentFixture<VendCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
