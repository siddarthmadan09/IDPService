import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodconfigComponent } from './authmethodconfig.component';

describe('AuthmethodconfigComponent', () => {
  let component: AuthmethodconfigComponent;
  let fixture: ComponentFixture<AuthmethodconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
