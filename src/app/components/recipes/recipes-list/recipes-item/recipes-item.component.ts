import { Component, Input } from '@angular/core';
import { Recipes } from '../../recipes.model';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input() recipes: Recipes;
}
