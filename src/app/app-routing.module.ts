import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MycartComponent } from './mycart/mycart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDeetailsComponent } from './product-deetails/product-deetails.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
{path:'',redirectTo:'signin',pathMatch:'full'},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'home',canActivate:[authGuard],component:HomeComponent},
{path:'categories',canActivate:[authGuard],component:CategoriesComponent},
{path:'productDetails/:id',canActivate:[authGuard],component:ProductDeetailsComponent},
{path:'products',canActivate:[authGuard],component:ProductsComponent},
{path:'brands',canActivate:[authGuard],component:BrandsComponent},
{path:'profile',canActivate:[authGuard],component:ProfileComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'resetPassword',component:ResetPasswordComponent},
{path:'wishlist',canActivate:[authGuard],component:WishlistComponent},
{path:'cart',canActivate:[authGuard],component:MycartComponent},
{path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
