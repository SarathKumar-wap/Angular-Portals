import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendInvComponent } from './vend-inv.component';

describe('VendInvComponent', () => {
  let component: VendInvComponent;
  let fixture: ComponentFixture<VendInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
