import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichUserComponent } from './affich-user.component';

describe('AffichUserComponent', () => {
  let component: AffichUserComponent;
  let fixture: ComponentFixture<AffichUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
