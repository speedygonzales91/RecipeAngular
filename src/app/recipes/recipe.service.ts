import { Recipe } from './recipe.model';

export class RecipeService {
   private recipes : Recipe[] = [
        new Recipe('Test Recipe1','This is simply a test1','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Test Recipe2','This is simply a test2','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Test Recipe3','This is simply a test3','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
      ];
    getRecipes() {
        return this.recipes.slice();
    }
}