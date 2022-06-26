import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation/confirmation.component';
import { ProductItemsComponent } from './components/product-item/product-items/product-items.component';
import { ProductItemsDetailsComponent } from './components/product-item-details/product-items-details/product-items-details.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemsComponent,
    ProductItemsDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
