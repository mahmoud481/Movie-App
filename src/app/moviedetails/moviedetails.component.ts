import { MoviesService } from './../movies.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  isloaded:boolean = false;
  movieDetails:any;
  movieId:any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/'
  topTen:any [] = [];

  constructor(
     private _MoviesService: MoviesService,
     private _ActivatedRoute:ActivatedRoute,
     private _router:Router
    ) { }


  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe((params:Params)=>
    {
      this.movieId = params['id'];
       // Getting Movie Details  // inside the subscribe to detect any changes
      this._MoviesService.getMovieDetails(this.movieId).subscribe((data)=>{
        this.movieDetails=data;
        this.isloaded = true
      });


    });
    // Get the active route to get movie id
    // this.movieId = this._ActivatedRoute.snapshot.paramMap.get('id');

    // this._router.navigate([this._router.url])

    // this._router.routeReuseStrategy.shouldReuseRoute = () => true;

    // Get Top Ten Movies
    this._MoviesService.getTrendingMovies().subscribe((data)=>{
      for(let i =0; i<10;i++){
        this.topTen.push(data.results[i]);
      }
    });
  }

}
