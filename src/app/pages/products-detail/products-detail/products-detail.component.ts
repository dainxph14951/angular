import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/products.models';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  @Input() products!: Iproducts
  constructor() { }

  ngOnInit(): void {
  }

}
