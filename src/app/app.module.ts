import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MycartComponent } from './mycart/mycart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import{HttpClientModule} from'@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDeetailsComponent } from './product-deetails/product-deetails.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    NavbarComponent,
    BrandsComponent,
    NotfoundComponent,
    FooterComponent,
    ProfileComponent,
    MycartComponent,
    WishlistComponent,
    SignupComponent,
    SigninComponent,
    ProductDeetailsComponent,
    MainsliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
