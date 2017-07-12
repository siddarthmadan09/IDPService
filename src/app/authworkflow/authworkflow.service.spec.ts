import { TestBed, inject } from '@angular/core/testing';

import { AuthworkflowService } from './authworkflow.service';

describe('AuthworkflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthworkflowService]
    });
  });

  it('should ...', inject([AuthworkflowService], (service: AuthworkflowService) => {
    expect(service).toBeTruthy();
  }));
});
