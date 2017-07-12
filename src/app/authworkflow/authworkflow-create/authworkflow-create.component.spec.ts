import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowCreateComponent } from './authworkflow-create.component';

describe('AuthworkflowCreateComponent', () => {
  let component: AuthworkflowCreateComponent;
  let fixture: ComponentFixture<AuthworkflowCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
