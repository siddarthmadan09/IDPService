import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthworkflowUsergroupCreateComponent } from './authworkflow-usergroup-create.component';

describe('AuthworkflowUsergroupCreateComponent', () => {
  let component: AuthworkflowUsergroupCreateComponent;
  let fixture: ComponentFixture<AuthworkflowUsergroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthworkflowUsergroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthworkflowUsergroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
