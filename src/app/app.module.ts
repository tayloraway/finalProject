import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { TvListComponent } from './tvshows/tvshows.component';
import { TvListCardComponent } from './tvcard/tvcard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    TvListComponent,
    TvListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
     // {path: 'products', component: ProductListComponent},
      {path: "home", component: HomeComponent},
      {path: "movies", component: MovieListComponent},
      {path: "tvshows", component: TvListComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: '**', redirectTo: 'home', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
