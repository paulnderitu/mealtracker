import { Component } from '@angular/core';
import { Food } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <h1>Foods I have Eaten:</h1>
  <div  *ngFor="let currentFood of foodsEaten">
  <p>Title: {{currentFood.title}}</p>
  <p>Description: {{currentFood.description}}</p>
  <p>No. of Calories: {{currentFood.calories}}</p>
  </div>

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
  public masterFoodList: Food[] = [
    new Food("Mukimo", "smashed potatoess with greens and githeri", 5000),
    new Food("Ugali", "miller corn served with greens or meat", 200),
    new Food("shafashi", "made from wheat flour, usually", 300),
  ];

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
