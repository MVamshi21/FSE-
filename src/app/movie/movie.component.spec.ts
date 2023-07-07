import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MovieComponent } from './movie.component';
import { of } from 'rxjs';
import { MovieService } from './movie.service';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      imports:[HttpClientModule, FormsModule],
      providers: [HttpTestingController]
    });
    fixture = TestBed.createComponent(MovieComponent);
    httpTestingController = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
 
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
