import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { LoginComponent } from './Components/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { DetailsComponent } from './Components/details/details.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';

const routes: Routes = [
{path:"",canActivate:[authGuard],component:BlankLayoutComponent,children:[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"checkout/:id",component:CheckOutComponent},
  {path:"allorders",component:AllOrdersComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"carts",component:CartComponent},
  {path:"brands",component:BrandsComponent}
]},
{path:"",component:AuthLayoutComponent,children:[
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent
  }
]},
{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
