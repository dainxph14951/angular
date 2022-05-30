import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/products.models';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  product: Iproducts = {
    name: "",
    img: "",
    quantity: 0,
    status: true,
    price: 0,
    desc: ""
  }
  constructor(
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        // nếu có id thì call service get product để lấy thông tin trả về form
        this.productService.getProduct(id).subscribe(data => this.product = data);
      }
    }
    onSubmit() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        // call services edit product
        // nếu thành công thì trả về sản phẩm vừa cập nhật xong
        this.productService.updateProduct(this.product).subscribe(data => console.log(data))
        alert('edit thành công')
        this.router.navigateByUrl('admin/products');
      } else {
        // call service add product
        this.productService.addProduct(this.product).subscribe(data => {
          // chuyển hướng router
          alert(' thêm thành công')
          this.router.navigateByUrl('admin/products');
        })
      }
    }
}
