import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AddMealComponent } from './add-meal.component';
import { CompletenessPipe } from './completeness.pipe';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddMealComponent,
    CompletenessPipe,
    MealListComponent,
    EditMealComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
