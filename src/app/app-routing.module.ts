import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { elementAt } from 'rxjs';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
