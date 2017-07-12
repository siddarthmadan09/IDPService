import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowEditComponent } from './authworkflow-edit.component';

describe('AuthworkflowEditComponent', () => {
  let component: AuthworkflowEditComponent;
  let fixture: ComponentFixture<AuthworkflowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
