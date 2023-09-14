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

const routes: Routes = [
{path:'',redirectTo:'signin',pathMatch:'full'},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'categories',component:CategoriesComponent},
{path:'productDetails/:id',component:ProductDeetailsComponent},
{path:'products',component:ProductsComponent},
{path:'brands',component:BrandsComponent},
{path:'profile',component:ProfileComponent},
{path:'wishlist',component:WishlistComponent},
{path:'cart',component:MycartComponent},
{path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
