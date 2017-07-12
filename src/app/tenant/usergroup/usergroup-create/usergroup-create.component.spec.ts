import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupCreateComponent } from './usergroup-create.component';

describe('UsergroupCreateComponent', () => {
  let component: UsergroupCreateComponent;
  let fixture: ComponentFixture<UsergroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
