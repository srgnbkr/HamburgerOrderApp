import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { MeatListComponent } from './pages/food-list/meat-list/meat-list.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IngredientListComponent } from './pages/food-list/ingredient-list/ingredient-list.component';
import { BasketListComponent } from './pages/food-list/basket-list/basket-list.component';
import { FriedFoodListComponent } from './pages/food-list/fried-food-list/fried-food-list.component';
import { DrinkListComponent } from './pages/food-list/drink-list/drink-list.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FoodListComponent,
    SpinnerComponent,
    MeatListComponent,
    MenuBarComponent,
    FooterComponent,
    IngredientListComponent,
    BasketListComponent,
    FriedFoodListComponent,
    DrinkListComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
