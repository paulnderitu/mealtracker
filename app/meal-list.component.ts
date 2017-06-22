import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './meal.model';
@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="all">Show All</option>
  <option value="isDone">Acceptable Calories</option>
  <option value="notDone" selected="selected">High Calories</option>
</select>
  <div  *ngFor="let currentFood of childFoodList | completeness:selectedCompleteness">
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
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
