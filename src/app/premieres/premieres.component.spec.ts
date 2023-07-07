import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremieresComponent } from './premieres.component';

describe('PremieresComponent', () => {
  let component: PremieresComponent;
  let fixture: ComponentFixture<PremieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremieresComponent]
    });
    fixture = TestBed.createComponent(PremieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
