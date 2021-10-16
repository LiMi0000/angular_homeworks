import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisePanelComponent } from './components/exercise-panel/exercise-panel.component';
import { NewExerciseComponent } from './components/new-exercise/new-exercise.component';

const routes: Routes = [
  { path: 'exercises', component: ExercisePanelComponent },
  { path: 'new-exercise', component: NewExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
