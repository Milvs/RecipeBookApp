import {Ingredient} from "../shared/ingredient.mode";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[]=[ new Ingredient("Chicken breast",2),
    new Ingredient("Tomatoes",10)];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
