import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/products.models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products!: Iproducts[]

  constructor(
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
    // chạy
    this.getProductList();
  }
      // khai báo
      getProductList() {
        this.productService.getProductList().subscribe(data => {
          this.products = data;
        })
      }
      onHandRemove(id : any) {
        const confirm = window.confirm('Bạn có muốn xóa không ?') 
        if(confirm){
          this.productService.removeProduct(id).subscribe(() => {
            // reRender
            this.products = this.products.filter(item => item.id !== id);
        });
      } }

}
