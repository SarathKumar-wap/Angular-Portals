import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendGoRecComponent } from './vend-go-rec.component';

describe('VendGoRecComponent', () => {
  let component: VendGoRecComponent;
  let fixture: ComponentFixture<VendGoRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendGoRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendGoRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
