import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodconfigCreateComponent } from './authmethodconfig-create.component';

describe('AuthmethodconfigCreateComponent', () => {
  let component: AuthmethodconfigCreateComponent;
  let fixture: ComponentFixture<AuthmethodconfigCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodconfigCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodconfigCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
