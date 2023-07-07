import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie } from './movie';
import { of } from 'rxjs';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieService);
  });

  const moviem={
    movieId:1,
    movieName:"hulk",
    theatreName:"Inox",
    totalSeats:100,
    availableTickets:100,
    img:'./assets/images/hulk.jpeg',
    ticketList:[]
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getMovie', ()=> {
    let movie: Movie[]|any;
    spyOn(service,'getAllMovies').and.returnValue(of(movie));
    service.getAllMovies().subscribe(data => {
      expect(data).toEqual(movie);
    })
  });

  it('addMovie()',()=> {
    const m={ movieId:1,
      movieName:"Ironman",
      theatreName:"PVP",
      totalSeats:100,
      availableTickets:100,
      img:'./assets/images/hulk.jpeg',
      ticketList:[]
    };
    spyOn(service,'addMovie').and.returnValue(of(moviem));
    service.addMovie(m).subscribe(data=> {
      expect(data).toEqual(moviem);
    })
  });

  it('deleteMovie',() => {
    spyOn(service,'deleteMovie').and.returnValue(of(moviem));
    service.deleteMovie(1).subscribe(data => {
      expect(data).toEqual(moviem);
    })
  })
});
