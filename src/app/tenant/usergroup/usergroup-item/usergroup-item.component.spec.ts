import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupItemComponent } from './usergroup-item.component';

describe('UsergroupItemComponent', () => {
  let component: UsergroupItemComponent;
  let fixture: ComponentFixture<UsergroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
