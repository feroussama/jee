import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichPropComponent } from './affich-prop.component';

describe('AffichPropComponent', () => {
  let component: AffichPropComponent;
  let fixture: ComponentFixture<AffichPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
