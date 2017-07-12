import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmethodconfigItemComponent } from './authmethodconfig-item.component';

describe('AuthmethodconfigItemComponent', () => {
  let component: AuthmethodconfigItemComponent;
  let fixture: ComponentFixture<AuthmethodconfigItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmethodconfigItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmethodconfigItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
