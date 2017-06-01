import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <h2>Foods I have Eaten:</h2>
  <div  class="food" *ngFor="let currentFood of foodsEaten">
  <p>{{currentFood}}</p>
  </div>
  </div>
  `
})

export class AppComponent {
  foodsEaten: String[] = ["Mukimo", "Githeri", "Omena", "Chapati"];

}

export class Food {
  constructor(public title: string, public details: string, public Carrolies: number) { }
}
