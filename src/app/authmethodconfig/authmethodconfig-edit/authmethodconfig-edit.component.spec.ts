import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodconfigEditComponent } from './authmethodconfig-edit.component';

describe('AuthmethodconfigEditComponent', () => {
  let component: AuthmethodconfigEditComponent;
  let fixture: ComponentFixture<AuthmethodconfigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodconfigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodconfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
