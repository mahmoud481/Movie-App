import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingMovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=74d3aa20244425eb0392869e8760eed5');
  }

  getTrendingTv():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=74d3aa20244425eb0392869e8760eed5');
  }

  getMovieDetails(movie_id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=74d3aa20244425eb0392869e8760eed5&language=en-US`);
  }



}
