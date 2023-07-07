import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import { AboutComponent } from './about.component';
import {MatCardModule} from '@angular/material/card';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [MatGridListModule, MatCardModule]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
