import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './meal.model';
@Component({
  selector: 'edit-meal',
  template: `
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
  `
})

export class EditMealComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

}
