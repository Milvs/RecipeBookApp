import {Recipe} from "./recipe.model";
import {EventEmitter, Inject, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.mode";
import {ShoppingListService} from "../shopping-list/shooping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [new Recipe("Chicken Nuggets", "When you are wondering what to eat",
    "https://lilluna.com/wp-content/uploads/2023/07/chicken-nuggets3-resize-13.jpg", [
      new Ingredient('Chicken breast', 2), new Ingredient('Eggs', 3)
    ]),
    new Recipe("Big Mac", "A Super Tasty Big Mac Burger ",
      "https://thegirlonbloor.com/wp-content/uploads/2015/03/Homemade-Big-Mac-Recipe-15.jpg", [
        new Ingredient('Beef', 1), new Ingredient('Buns', 3)
      ]),
    new Recipe("Onion Rings", "Simple rings",
      "https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg", [
        new Ingredient('Onion', 5), new Ingredient('Flour', 1), new Ingredient('Sunflower oil', 1)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
