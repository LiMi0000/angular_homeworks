import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.css'],
})
export class NewExerciseComponent implements OnInit {
  constructor() {}

  newExerciseForm: FormGroup;
  exercises: Exercise;

  ngOnInit(): void {
    this.iniForm();
  }

  iniForm() {
    this.newExerciseForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onCreateExercise() {
    // console.log(this.newExerciseForm.value);
    const exercise: Exercise = {
      id: this.newExerciseForm.value.id,
      date: this.newExerciseForm.value.date,
      progress: this.newExerciseForm.value.progress,
      title: this.newExerciseForm.value.title,
      description: this.newExerciseForm.value.description,
    };
  }
}
