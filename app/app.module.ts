import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AddMealComponent } from './add-meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddMealComponent,
    MealListComponent,
    EditMealComponent,
    CompletenessPipe,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
