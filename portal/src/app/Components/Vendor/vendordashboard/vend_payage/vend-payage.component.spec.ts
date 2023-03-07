import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendPayageComponent } from './vend-payage.component';

describe('VendPayageComponent', () => {
  let component: VendPayageComponent;
  let fixture: ComponentFixture<VendPayageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendPayageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendPayageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
