import { TestBed, inject } from '@angular/core/testing';

import { AuthworkflowUsergroupService } from './authworkflow-usergroup.service';

describe('AuthworkflowUsergroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthworkflowUsergroupService]
    });
  });

  it('should ...', inject([AuthworkflowUsergroupService], (service: AuthworkflowUsergroupService) => {
    expect(service).toBeTruthy();
  }));
});
