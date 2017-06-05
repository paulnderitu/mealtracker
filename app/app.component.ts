import { Component } from '@angular/core';
import { Food } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <h1>Foods I have Eaten:</h1>
  <div  *ngFor="let currentFood of foodsEaten">
  <p>{{currentFood.title}}</p>
  <p>Description {{currentFood.description}}</p>
  <p>Calories {{currentFood.calories}}</p>

  <button (click)="showDetails(currentFood)">Edit Meal</button>
  </div>


<div *ngIf="selectedFood">
<h1>Edit Meal</h1>
<div>
<label>Enter Name of Food:</label>
<input [(ngModel)]="selectedFood.title">
</div>
<div>
<label>Enter Food Description:</label>
<input [(ngModel)]="selectedFood.description">
</div>
<div>
<label>Enter no of Calories:</label>
<input [(ngModel)]="selectedFood.calories">
<button (click)="finishedEditing()">Done Editing</button>
</div>
</div>

  <addmeal
  (newFoodSender)="addFood($event)"

  ></addmeal>

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
