import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }


movies: Movie[]|any;

private apiGet=`http://localhost:8000/moviebooking/all`;
private apiGetById=`http://localhost:8000/api/v1/movieById`;
private apiPost=`http://localhost:8000/moviebooking/{movieName}/booking`;
private apiDelete=`http://localhost:8000/moviebooking/{movieName}/delete`; 
private apiPut=`http://localhost:8000/moviebooking//{movieName}/update/{ticketId}`;

addMovie(m:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.apiPost, m);
}

getAllMovies():Observable<Array<Movie>>{
  return this.http.get<Array<Movie>>(this.apiGet);
}

  deleteMovie(mid:number): Observable<Movie>{
    return this.http.delete<Movie>(`${this.apiDelete}/${mid}`);
  }

  getMovieById(mid:number):Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(`${this.apiGetById}/${mid}`);
  }  

 updateMovie(m:Movie): Observable<Movie>{
    return this.http.put<Movie>(this.apiPut, m);
  } 
}