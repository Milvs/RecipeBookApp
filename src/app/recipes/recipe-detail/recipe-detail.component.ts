import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {AppModule} from "../../app.module";
import {NgForOf} from "@angular/common";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    AppModule,
    NgForOf
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router:Router) {
  }

  onAddToShoppingList() {

    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.route});

  }
}
