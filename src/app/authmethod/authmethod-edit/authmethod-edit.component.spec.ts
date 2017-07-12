import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodEditComponent } from './authmethod-edit.component';

describe('AuthmethodEditComponent', () => {
  let component: AuthmethodEditComponent;
  let fixture: ComponentFixture<AuthmethodEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
