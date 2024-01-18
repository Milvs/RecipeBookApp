import {Component} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [ new Recipe("Chicken Nuggets","You will need chicken breast","https://lilluna.com/wp-content/uploads/2023/07/chicken-nuggets3-resize-13.jpg"),
    new Recipe("Big Mac","You will need beef,cheese of your choice ","https://thegirlonbloor.com/wp-content/uploads/2015/03/Homemade-Big-Mac-Recipe-15.jpg"),
    new Recipe("Onion Rings","You will need onions,oil ","https://sweetsimplevegan.com/wp-content/uploads/2022/03/close_up_Vegan_beer_battered_crispy_onion_rings_sweet_simple_vegan_2.jpg"),
  ];




}
