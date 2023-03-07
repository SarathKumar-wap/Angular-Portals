import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendSidebarComponent } from './vend-sidebar.component';

describe('VendSidebarComponent', () => {
  let component: VendSidebarComponent;
  let fixture: ComponentFixture<VendSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
