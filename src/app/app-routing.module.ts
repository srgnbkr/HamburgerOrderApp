import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'ürünler',
    component: FoodListComponent,
  },
  {
    path: 'sipariş-oluştur',
    component: CreateOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
