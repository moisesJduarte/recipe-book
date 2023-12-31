import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../../recipes.model';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipes: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
