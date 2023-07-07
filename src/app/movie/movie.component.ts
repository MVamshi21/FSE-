import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  constructor(private movieService:MovieService, private service:RegistrationService,private router: Router){
      service.role.subscribe(data=>{
        if(data==="admin"){
          this.isAdmin=true;
        }
      })
  } 
  data:{}|any;
movieObj :Movie=new Movie();
moviearr: Array<Movie>=[];
public dataSource:[] |any;
moviem:Movie = new Movie();
movieData:Array<Movie>=[];
response:any;

isAdmin:boolean=false;

   addMovieDetails()
   {
     this.movieService.addMovie(this.movieObj).subscribe(data=>
      {
        this.data= JSON.stringify(data);
        this.moviearr.push(this.data);
        //window.location.reload();
      },
      error=>{console.log(error);
      })
   }

   viewAllMovies()
   {
     this.movieService.getAllMovies().subscribe(data=>
      {
        this.moviearr = Object.values(data);
        this.dataSource = this.moviearr;
      },
      error=>{console.log(error);
      })
   }

   deleteMovie(mid:number)
   {
    if(confirm(`Are you sure you want to delete movie details`)){
     this.movieService.deleteMovie(mid).subscribe(data=>
      {
        let movieIndex = this.moviearr.findIndex(c=>c.movieid==mid);
        this.moviearr.splice(movieIndex,1);
        this.viewAllMovies();
      },
      error=>{console.log(error);
      })
    }
   }

    searchById()
   {
    this.movieService.getMovieById(this.moviem.movieid).subscribe(response=>
  {
    this.movieData = Object.values(response);
    this.response = JSON.stringify(response);
    alert('Search result is given! Have a look :)');
  },
  error=>{console.log(error);
  }) 
}

 update() {
  this.movieService.updateMovie(this.moviem).subscribe(res => {
    console.log(res);
  },error=>console.log(error));
} 

edit(m: Movie){
  this.moviem = m;
}
}
