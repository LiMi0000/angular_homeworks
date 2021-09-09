import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  constructor() {}

  @Input() titleFromApp: string = '';

  @Input() titleFromTheParent: string = '';

  fastFurious: string = '';

  movieInformation(movie: Movie) {
    return `The movie name is: ${movie.name} so the release date was ${movie.releaseDate} with producers like ${movie.producerName} and the genre is ${movie.genre}`;
  }

  showMovies() {
    this.fastFurious = this.movieInformation(this.movies);
  }

  // according to google
  movies: Movie = {
    name: 'Fast & Furious',
    releaseDate: 'June 25, 2021',
    producerName: 'Vin Diesel, Justin Lee, Samantha Vincent...',
    genre: 'Action, Thriller, Heist, Crime',
  };
}

export interface Movie {
  name: string;
  releaseDate: string | number;
  producerName: string;
  genre: string;
}
