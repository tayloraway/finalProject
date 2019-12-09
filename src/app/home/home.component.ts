import { Component } from '@angular/core';
import { IMovies } from '../movies/movies';
import { MovieService } from '../movies/movies.service';
import { ITvshows } from '../tvshows/tvshows';



@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public pageTitle = 'Home';
  movies: IMovies[] = [];
  tvshows: ITvshows[] = [];
    imageWidth: number = 350;
    imageMargin: number = 5;
  
  
    constructor(private movieService: MovieService){}
    
    
    ngOnInit() : void {
        this.movieService.getMovies().subscribe(movieObserved =>{
            this.movies = movieObserved;
        
        
        });
    }



  
  
    
     
}
