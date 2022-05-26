import { Component } from '@angular/core';
import { Iproducts } from './models/products.models';
import data from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'my-app';
  productList: Iproducts[]= data;
  onHandleAdd(product: any) {
    console.log(product);
    this.productList.push(product);
  }
}
