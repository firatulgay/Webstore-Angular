import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products', component : ProductComponent}, // /product yazılırsa ProductComponennt gelsin.
  {path:'', redirectTo : 'products',pathMatch:'full'}, // pathMatch:'full' path e hiç bişey girilmediğinden emin olduktan sonra products sayfasına yönlendirme  yapıyor.
  {path:'products/category/:categoryId', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
