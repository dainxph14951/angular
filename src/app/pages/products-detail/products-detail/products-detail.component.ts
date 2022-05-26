import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/products.models';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service'; 

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  // @Input() products!: Iproducts
  product!: Iproducts
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
    ) { 
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    // this.product = this.productService.getProduct(id)!;
  }

  ngOnInit(): void {
  }

}
