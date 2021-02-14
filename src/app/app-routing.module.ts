import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAddClassicFormComponent } from './product/product-add-classic-form/product-add-classic-form.component';
import { ProductAddReactiveFormComponent } from './product/product-add-reactive-form/product-add-reactive-form.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products', component : ProductComponent}, // path olarak /product yazılırsa ProductComponennt gelsin.
  {path:'product-add-1', component : ProductAddClassicFormComponent}, 
  {path:'product-add-2', component : ProductAddReactiveFormComponent}, 
  {path:'', redirectTo : 'products',pathMatch:'full'}, // pathMatch:'full' path e hiç bişey girilmediğinden emin olduktan sonra products sayfasına yönlendirme  yapıyor.
  {path:'products/category/:categoryId', component:ProductComponent},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
