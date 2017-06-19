import { Component } from '@angular/core';
import { Food } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <h1>Foods I have Eaten:</h1>
  <meal-list
    [childFoodList]="masterFoodList"
    (clickSender)="showDetails($event)"
  ></meal-list>

  <edit-meal
  [childSelectedFood]="selectedFood"
  (doneClickedSender)="finishedEditing()"
  ></edit-meal>

  <add-meal
  (newFoodSender)="addFood($event)"

  ></add-meal>

  <select>
  <option value="all">Show All</option>
  <option value="isDone">Show Done</option>
  <option value="notDone" selected="selected">Show Not Done</option>
</select>
  <div *ngFor="let currentFood of childFoodList | completeness">

  </div>

  `
})

export class AppComponent {
  public foodsEaten: Food[] = [
    new Food("Mukimo", "smashed potaties with greens and githeri", 5000),
    new Food("Ugali", " and githeri", 200),
    new Food("shafashi", "smashed potaties with greens and githeri", 5000),
  ];

  selectedFood: Food = null;
  showDetails(clickedfoodsEaten: Food) {
    this.selectedFood = clickedfoodsEaten;
  }
  finishedEditing() {
    this.selectedFood = null;
  }

  addFood(newMealToAdd: Food) {
    this.foodsEaten.push(newMealToAdd);
  }

}
