import {Component, OnInit} from '@angular/core';
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {Recipe} from "./recipe.model";
import {NgIf} from "@angular/common";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    NgIf
  ],
  providers:[RecipeService],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{

  selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe) => {this.selectedRecipe=recipe});
  }

}
