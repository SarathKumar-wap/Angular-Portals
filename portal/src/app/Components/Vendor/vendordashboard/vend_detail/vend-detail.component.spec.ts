import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendDetailComponent } from './vend-detail.component';

describe('VendDetailComponent', () => {
  let component: VendDetailComponent;
  let fixture: ComponentFixture<VendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
