import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component],
  imports: [BrowserModule, HttpClientModule, UsersModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
