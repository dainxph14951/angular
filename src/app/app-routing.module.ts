import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { elementAt } from 'rxjs';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NodeFoundComponent } from './pages/node-found/node-found/node-found.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail/products-detail.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  {path:'admin/products', component: ListProductsComponent },
  // {path:'products', component: ProductsComponent },
  {path:'admin/products/add', component: AddProductsComponent },
  {path:'products/:id', component: ProductsDetailComponent },
  // { path: "products/edit/:id", component: ProductAddComponent },
  { path: "**", component: NodeFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
