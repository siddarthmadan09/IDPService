import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowItemComponent } from './authworkflow-item.component';

describe('AuthworkflowItemComponent', () => {
  let component: AuthworkflowItemComponent;
  let fixture: ComponentFixture<AuthworkflowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
