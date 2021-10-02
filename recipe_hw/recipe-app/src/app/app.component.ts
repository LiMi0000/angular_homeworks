import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app';
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipesFromService();
  }
}
