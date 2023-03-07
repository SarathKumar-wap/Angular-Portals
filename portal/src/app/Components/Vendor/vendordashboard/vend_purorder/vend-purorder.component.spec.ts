import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendPurorderComponent } from './vend-purorder.component';

describe('VendPurorderComponent', () => {
  let component: VendPurorderComponent;
  let fixture: ComponentFixture<VendPurorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendPurorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendPurorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
