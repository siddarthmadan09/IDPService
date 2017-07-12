import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowComponent } from './authworkflow.component';

describe('AuthworkflowComponent', () => {
  let component: AuthworkflowComponent;
  let fixture: ComponentFixture<AuthworkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
