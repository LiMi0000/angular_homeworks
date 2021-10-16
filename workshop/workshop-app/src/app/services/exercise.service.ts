import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from '../interfaces/exercise';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private http: HttpClient) {}

  exerciseData$: Subject<Exercise[]> = new Subject<Exercise[]>();

  getAllExercise() {
    this.http
      .get('http://localhost:3000/exercises')
      .pipe(map((exercise) => exercise as Exercise[]))
      .subscribe((exercise: Exercise[]) => {
        this.exerciseData$.next(exercise);
      });
  }
}
