import { TestBed } from '@angular/core/testing';

import { VendService } from './vend.service';

describe('VendService', () => {
  let service: VendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
