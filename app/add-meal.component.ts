import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './meal.model';

@Component({
  selector: 'addmeal',
  template: `
  <div class="container">

  <h2>Today's Meal</h2>

  <div>
  <label>Enter Meal Name:</label>
  <input #newName>
  </div>
  <div>
  <label>Enter Meal Description:</label>
  <input #newDescription>
  </div>
  <div>
  <label>Enter No. of Calories:</label>
  <input #newCalories>

  <button (click)="
  addClicked(newName.value, newDescription.value, newCalories.value);
  newName.value='';
  newDescription.value='';
  newCalories.value= '';
  "
  >Add Today's Meal</button>
  </div>
  </div>
  `
})
export class AddedMealComponent {

  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newMealToAdd: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newMealToAdd);
  }
}
