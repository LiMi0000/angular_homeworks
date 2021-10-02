import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeRepoService {
  constructor(private http: HttpClient) {}

  getRecipesFromRepo(): Observable<Recipe[]> {
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(map((recipes) => recipes as Recipe[]));
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http
      .put(`https://fakestoreapi.com/products/${id}`, recipe)
      .pipe(map((recipe) => recipe as Recipe));
  }
}
