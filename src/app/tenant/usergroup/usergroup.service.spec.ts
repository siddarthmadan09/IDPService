import { TestBed, inject } from '@angular/core/testing';

import { UsergroupService } from './usergroup.service';

describe('UsergroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsergroupService]
    });
  });

  it('should ...', inject([UsergroupService], (service: UsergroupService) => {
    expect(service).toBeTruthy();
  }));
});
