import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupDeleteComponent } from './usergroup-delete.component';

describe('UsergroupDeleteComponent', () => {
  let component: UsergroupDeleteComponent;
  let fixture: ComponentFixture<UsergroupDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
