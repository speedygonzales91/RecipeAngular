import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //@Output() recipeSelected = new EventEmitter<void>();
/*   recipes : Recipe[] = [
    new Recipe('Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg') 
  ];
  */

  @Input() recipe : Recipe;
  constructor(private recipeService :RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeWasSelected.emit(this.recipe);

  }

}
