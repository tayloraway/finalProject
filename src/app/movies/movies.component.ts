import { Component } from "@angular/core";
import { IMovies } from './movies';
import { MovieService } from './movies.service';


@Component({
    selector: 'pm-movies',
    templateUrl: './movies.component.html'
})

export class MovieListComponent{
    movies: IMovies[] = [];
    imageWidth: number = 150;
    imageMargin: number = 5;
    constructor(private movieService: MovieService){

        
        
    }
    ngOnInit() : void {
        this.movieService.getMovies().subscribe(movieObserved =>{
            this.movies = movieObserved;
        });
    }
}

