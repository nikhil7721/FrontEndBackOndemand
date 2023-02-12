import { TestBed } from '@angular/core/testing';

import { GetorderService } from './getorder.service';

describe('GetorderService', () => {
  let service: GetorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
