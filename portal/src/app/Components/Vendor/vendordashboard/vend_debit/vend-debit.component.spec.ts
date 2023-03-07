import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendDebitComponent } from './vend-debit.component';

describe('VendDebitComponent', () => {
  let component: VendDebitComponent;
  let fixture: ComponentFixture<VendDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
