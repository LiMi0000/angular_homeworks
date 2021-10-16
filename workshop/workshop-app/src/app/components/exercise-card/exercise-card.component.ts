import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css'],
})
export class ExerciseCardComponent implements OnInit {
  constructor() {}

  @Input() displayedExercise: Exercise;

  ngOnInit(): void {}
}
