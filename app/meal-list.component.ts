import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './meal.model';
@Component({
  selector: 'meal-list',
  template: `
  <div  *ngFor="let currentFood of foodsEaten">
  <p>{{currentFood.title}}</p>
  <p>Description {{currentFood.description}}</p>
  <p>Calories {{currentFood.calories}}</p>

  <button (click)="editButtonHasBeenClicked(currentFood)">Edit Meal</button>
  </div>
  `
})
export class MealListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
