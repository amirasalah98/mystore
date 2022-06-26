import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemsComponent } from './components/product-item/product-items/product-items.component';
import { ProductItemsDetailsComponent } from './components/product-item-details/product-items-details/product-items-details.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { ConfirmationComponent } from './components/confirmation/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart/cart.component';
const routes: Routes = [
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path: 'list',component:ProductListComponent},
  {path: 'confirmation',component:ConfirmationComponent},
  {path: 'cart', component:CartComponent},
  {path: 'productitems', component:ProductItemsComponent},
  {path: 'productitemsdetails', component:ProductItemsDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
