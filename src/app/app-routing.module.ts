import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { elementAt } from 'rxjs';
import { ProductsDetailComponent } from './pages/products-detail/products-detail/products-detail.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'products', component: ProductsComponent },
  {path:'products/:id', component: ProductsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
