import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {AppModule} from "../../app.module";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    AppModule
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() recipe:Recipe;


}
