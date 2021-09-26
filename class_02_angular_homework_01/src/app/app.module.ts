import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MovieListComponent } from './components/MovieList/MovieList.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}