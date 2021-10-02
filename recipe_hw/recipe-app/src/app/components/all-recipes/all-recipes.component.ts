import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipes: Recipe[] = [];
  deleteRecipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipeService.$recipes.subscribe(
      (fetchedRecipes) => (
        console.log(fetchedRecipes), (this.recipes = fetchedRecipes)
      )
    );
  }

  deleteRecipe(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    if (index >= 0) {
      this.recipes.splice(index, 1);
    }
  }

  setRecipeForUpdate(id: string | number) {
    const recipeForUpdate = this.recipes.find((recipe) => recipe.id === id);

    if (!!recipeForUpdate) {
      this.recipeService.setRecipeToUpdate(recipeForUpdate);
    }
  }
}
