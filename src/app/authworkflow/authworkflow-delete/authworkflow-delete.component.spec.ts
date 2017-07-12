import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowDeleteComponent } from './authworkflow-delete.component';

describe('AuthworkflowDeleteComponent', () => {
  let component: AuthworkflowDeleteComponent;
  let fixture: ComponentFixture<AuthworkflowDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
