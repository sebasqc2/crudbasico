import { TestBed } from '@angular/core/testing';

import { HandleServicesService } from './handle-services.service';

describe('HandleServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleServicesService = TestBed.get(HandleServicesService);
    expect(service).toBeTruthy();
  });
});
