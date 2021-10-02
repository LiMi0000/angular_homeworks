import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { RecipeRepoService } from './recipe-repo.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private recipeService: RecipeRepoService) {}

  private _recipes = new BehaviorSubject<Recipe[]>([]);
  $recipes = this._recipes.asObservable();

  private _recipeToUpdate = new BehaviorSubject<Recipe>({} as Recipe);

  getRecipesFromService() {
    this.recipeService
      .getRecipesFromRepo()
      .subscribe((recipes) => this._recipes.next(recipes));
  }

  setRecipeToUpdate(recipe: Recipe) {
    this._recipeToUpdate.next(recipe);
  }

  getRecipeToUpdateValue() {
    return this._recipeToUpdate.getValue();
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipeService
      .updateRecipe(id, recipe)
      .subscribe((recipe) => this.handleUpdatedRecipe(recipe));
  }

  handleUpdatedRecipe(recipe: Recipe) {
    const recipes = this._recipes.getValue();

    const recipeId =
      typeof recipe.id === 'string' ? parseInt(recipe.id) : recipe.id;
    const indexOfRecipes = recipes.findIndex(({ id }) => id === recipeId);

    recipes[indexOfRecipes] = { ...recipe, id: recipeId };

    this._recipes.next(recipes);
  }
}
