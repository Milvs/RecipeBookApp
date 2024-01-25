import {Component, OnInit} from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/ingredient.mode";
import {NgForOf} from "@angular/common";
import {ShoppingListService} from "./shooping-list.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingEditComponent,
    NgForOf
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListService) {}

    ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{this.ingredients=ingredients;})
    }
}
