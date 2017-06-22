import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './meal.model';
@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedFood">
  <h1>Edit Meal</h1>

  <div>
  <label>Enter Name of Food:</label>
  <input [(ngModel)]="childSelectedFood.title">
  </div>

  <div>
  <label>Enter Food Description:</label>
  <input [(ngModel)]="childSelectedFood.description">
  </div>

  <div>
  <label>Enter no. of Calories:</label>
  <input [(ngModel)]="childSelectedFood.calories">
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
