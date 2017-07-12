import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodComponent } from './authmethod.component';

describe('AuthmethodComponent', () => {
  let component: AuthmethodComponent;
  let fixture: ComponentFixture<AuthmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
