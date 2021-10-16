import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.css'],
})
export class ExercisePanelComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  exercises: Exercise[];
  exerciseSubs: Subscription;
  exerciseDisplay: Exercise;

  ngOnInit() {
    this.exerciseSubs = this.exerciseService.exerciseData$.subscribe(
      (payload: Exercise[]) => {
        this.exercises = payload;
        console.log(this.exercises);
      }
    );
    this.exerciseService.getAllExercise();
  }

  onDisplayExercise(exercise: Exercise) {
    this.exerciseDisplay = exercise;
  }
}
