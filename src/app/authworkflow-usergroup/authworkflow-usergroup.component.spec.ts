import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowUsergroupComponent } from './authworkflow-usergroup.component';

describe('AuthworkflowUsergroupComponent', () => {
  let component: AuthworkflowUsergroupComponent;
  let fixture: ComponentFixture<AuthworkflowUsergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowUsergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowUsergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
