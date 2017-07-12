import { TestBed, inject } from '@angular/core/testing';

import { AuthmethodconfigService } from './authmethodconfig.service';

describe('AuthmethodconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthmethodconfigService]
    });
  });

  it('should ...', inject([AuthmethodconfigService], (service: AuthmethodconfigService) => {
    expect(service).toBeTruthy();
  }));
});
