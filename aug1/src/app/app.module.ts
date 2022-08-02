import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductcategoryListComponent } from './components/productcategory-list/productcategory-list.component';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ProformComponent } from './components/proform/proform.component';
import { FormProductcategaryComponent } from './components/form-productcategary/form-productcategary.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



const routes: Routes = [
 
  {path : 'shop',component : ProductListComponent},
  {path : 'pcat',component : ProductcategoryListComponent},
  {path:'',component:WelcomeComponent},
  {path:'addform',component:ProformComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductcategoryListComponent,
    ProformComponent,
    FormProductcategaryComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
