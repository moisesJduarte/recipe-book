import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
    new Recipes('A Test Recipe', 'This is  simply a Test', 'https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg')
  ];

  constructor() {
  }
  ngOnInit(): void {

  }

  onRecipeSelected(recipes: Recipes) {
    this.recipeWasSelected.emit(recipes)
  }
}
