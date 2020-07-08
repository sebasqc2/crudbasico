import { TestBed } from '@angular/core/testing';

import { MessagingServicesService } from './messaging-services.service';

describe('MessagingServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagingServicesService = TestBed.get(MessagingServicesService);
    expect(service).toBeTruthy();
  });
});
