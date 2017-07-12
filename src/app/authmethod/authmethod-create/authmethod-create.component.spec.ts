import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodCreateComponent } from './authmethod-create.component';

describe('AuthmethodCreateComponent', () => {
  let component: AuthmethodCreateComponent;
  let fixture: ComponentFixture<AuthmethodCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
