import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

   public recipeWasSelected = new EventEmitter<Recipe>(); 
   private recipes : Recipe[] = [
        new Recipe(
          'Test Recipe1',
          'This is simply a test1',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
          [
            new Ingredient('Ingredient1',10),
            new Ingredient('Ingredient2',20),
          ]
          ),
        new Recipe(
          'Test Recipe2',
          'This is simply a test2',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
          [
            new Ingredient('Ingredient3',30),
            new Ingredient('Ingredient4',40),
          ]
          ),
        new Recipe(
          'Test Recipe3',
          'This is simply a test3',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
          [
            new Ingredient('Ingredient5',50),
            new Ingredient('Ingredient6',60),
          ]
          )
      ];


    constructor(private slService :ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients :Ingredient[]) {
      this.slService.addIngredientsFromRecipe(ingredients);
    }
}