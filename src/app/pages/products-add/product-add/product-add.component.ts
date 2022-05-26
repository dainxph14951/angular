import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: { id: number, name: string, price: number ,  status: boolean } = {
    id: 1,
    name: "",
    status: true,
    price: 0
  }
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('submitted!')
    console.log(this.product);
    
    this.productService.addProduct(this.product);
  }

}
