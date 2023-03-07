import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdbmemoComponent } from './crdbmemo.component';

describe('CrdbmemoComponent', () => {
  let component: CrdbmemoComponent;
  let fixture: ComponentFixture<CrdbmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrdbmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdbmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
