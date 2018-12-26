import { TestBed } from '@angular/core/testing';

import { ZahteveService } from './zahteve.service';

describe('ZahteveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZahteveService = TestBed.get(ZahteveService);
    expect(service).toBeTruthy();
  });
});
