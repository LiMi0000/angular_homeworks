import { Movie } from './../movie/movie.component';
import { Component, Input } from '@angular/core';

@Component({
  //   selector: '[app-movie-list]',
  //   selector: '.app-movie-list',
  selector: 'app-movie-list',
  templateUrl: './MovieList.component.html',
  styleUrls: ['./MovieList.component.css'],
})
export class MovieListComponent {
  @Input() titleFromAppComponent: string = '';

  movieTitle: string = 'MOVIE-COMPONENT-TITLE';

  title: string = 'title from the movie list parent component';
}
