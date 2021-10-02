import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService, private router: Router) {}

  recipeToUpdate: Recipe = {} as Recipe;

  editRecipeForm: FormGroup;

  ngOnInit(): void {
    this.recipeToUpdate = this.recipeService.getRecipeToUpdateValue();

    this.initForm(this.recipeToUpdate);
  }

  initForm(recipe: Recipe) {
    this.editRecipeForm = new FormGroup({
      name: new FormControl(recipe.title),
      description: new FormControl(recipe.description),
    });
  }

  submitForm() {
    const recipeToBeUpdated: Recipe = {
      ...this.recipeToUpdate,
      title: this.editRecipeForm.value.name,
      description: this.editRecipeForm.value.description,
    };

    this.recipeService.updateRecipe(recipeToBeUpdated.id, recipeToBeUpdated);
  }
}
