import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CakesComponent } from './cakes/cakes.component';
import { GamesComponent } from './games/games.component';
import { BagsComponent } from './bags/bags.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, ShoppingComponent, CakesComponent, GamesComponent, BagsComponent, CheckoutComponent, FavouriteComponent, LoginComponent, RegisterComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
