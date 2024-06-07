import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DetailsComponent } from './Components/details/details.component';
import { NavBlankComponent } from './Components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './Components/nav-auth/nav-auth.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    SearchPipe,
    CheckOutComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
