import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef : ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService :ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngName = this.nameInputRef.nativeElement.value;
    const newIngAmount = this.amountInputRef.nativeElement.value;
    //const newIngredient = this.ingredientAdded.emit(new Ingredient(newIngName,newIngAmount));
    this.slService.addIngredient(new Ingredient(newIngName,newIngAmount));
  }

}
