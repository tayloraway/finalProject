
import { Component } from '@angular/core';
import { ITvshows } from './tvshows';
import { TvService } from './tvshows.service';

@Component({
    selector: 'pm-tvshows',
    templateUrl: './tvshows.component.html'
})

export class TvListComponent{
    tvshows: ITvshows[] = [];
    imageWidth: number = 150;
    imageMargin: number = 5;
    constructor(private tvService: TvService){

        
        
    }
    ngOnInit() : void {
        this.tvService.getTvshows().subscribe(tvObserved =>{
            this.tvshows = tvObserved;
        });
    }
}