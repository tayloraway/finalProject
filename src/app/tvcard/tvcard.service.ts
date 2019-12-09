import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvshows } from '../tvshows/tvshows';



@Injectable({
    providedIn:'root'
})

export class TvCardService {
    constructor(private http: HttpClient){}

    movieUrl = "https://api.themoviedb.org/3/tv/popular?api_key=fb4cad8e46da879175b60971f21bee40&language=en-US&page=1";
    getTvshows() :Observable<ITvshows[]>
    {
        return this.http.get<ITvshows[]>(this.movieUrl)
    }
}