import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movieId: number | any;
  movie:Movie = new Movie();
  data:any;
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
     this.movieId = this.route.snapshot.params['movieId'];
    this.service.getMovieById(this.movieId).subscribe( data => {
      //this.data=data;
      console.log(data);
    });  
  }

}
