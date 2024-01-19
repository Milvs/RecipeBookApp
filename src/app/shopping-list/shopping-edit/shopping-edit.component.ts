import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Ingredient} from "../../shared/ingredient.mode";

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  OnAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);


  }
}
