import { TestBed } from '@angular/core/testing';

import { NumberToTextService } from './number-to-text.service';

describe('NumberToTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberToTextService = TestBed.get(NumberToTextService);
    expect(service).toBeTruthy();
  });
});
