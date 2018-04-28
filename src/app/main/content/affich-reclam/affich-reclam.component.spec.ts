import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichReclamComponent } from './affich-reclam.component';

describe('AffichReclamComponent', () => {
  let component: AffichReclamComponent;
  let fixture: ComponentFixture<AffichReclamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichReclamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
