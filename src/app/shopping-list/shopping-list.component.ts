import { Component } from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/ingredient.mode";
import {NgForOf} from "@angular/common";

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
export class ShoppingListComponent {
  ingredients:Ingredient[]=[ new Ingredient("Chicken breast",2),
  new Ingredient("Tomatoes",10)];



}
