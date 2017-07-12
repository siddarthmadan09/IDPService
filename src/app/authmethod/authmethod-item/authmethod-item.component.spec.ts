import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodItemComponent } from './authmethod-item.component';

describe('AuthmethodItemComponent', () => {
  let component: AuthmethodItemComponent;
  let fixture: ComponentFixture<AuthmethodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
