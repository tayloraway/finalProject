import { Component } from '@angular/core';
import { ITvshows } from '../tvshows/tvshows';
import { TvService } from '../tvshows/tvshows.service';


@Component({
    selector: 'pm-tvcard',
    templateUrl: './tvcard.component.html'
})

export class TvListCardComponent{
    tvshows: ITvshows[] = [];
    imageWidth: number = 350;
    imageMargin: number = 5;
    constructor(private tvService: TvService){

        
        
    }
    ngOnInit() : void {
        this.tvService.getTvshows().subscribe(tvObserved =>{
            this.tvshows = tvObserved;
        });
    }
}