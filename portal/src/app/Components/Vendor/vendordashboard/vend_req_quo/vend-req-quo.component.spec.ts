import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendReqQuoComponent } from './vend-req-quo.component';

describe('VendReqQuoComponent', () => {
  let component: VendReqQuoComponent;
  let fixture: ComponentFixture<VendReqQuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendReqQuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendReqQuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
