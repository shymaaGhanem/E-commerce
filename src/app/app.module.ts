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
import{HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDeetailsComponent } from './product-deetails/product-deetails.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddHeaderInterceptor } from './interceptor/add-header.interceptor';
import { AddTitlePipe } from './add-title.pipe';
import { SearchPipe } from './search.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
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
    MainsliderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CheckoutComponent,
    AllOrdersComponent,
    AddTitlePipe,
    SearchPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
  {
  provide:HTTP_INTERCEPTORS,
  useClass:AddHeaderInterceptor,
  multi:true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
