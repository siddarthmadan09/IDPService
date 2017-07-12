import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsItemComponent } from './permissions-item.component';

describe('PermissionsItemComponent', () => {
  let component: PermissionsItemComponent;
  let fixture: ComponentFixture<PermissionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
