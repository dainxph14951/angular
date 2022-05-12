import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isStatus: boolean = false;
  nameInput: string = "";
  productList: {id: number, name: string, price: number , status: boolean}[]= [
    {id:1, name: 'Products A', price: 500, status: true},
    {id:2, name: 'Products B', price: 600, status: false},
    {id:3, name: 'Products C', price: 800, status: true},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onhandleClick(){
    this.isStatus = !this.isStatus
  }
  onHandeleRemove(id: number){
    this.productList = this.productList.filter(products => products.id !== id )
  }
}
