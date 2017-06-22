import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './meal.model';
@Component({
  selector: 'meal-list',
  template: `
  <div  *ngFor="let currentFood of childFoodList |completeness">
  <p>Title: {{currentFood.title}}</p>
  <p>Description: {{currentFood.description}}</p>
  <p>No. of Calories: {{currentFood.calories}}</p>

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
