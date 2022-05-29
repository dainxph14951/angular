import { Injectable } from '@angular/core';
import data from '../data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Iproducts } from '../models/products.models';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
URL_API = `http://localhost:3000/products`
  constructor(
    private http: HttpClient
  ) { }
  getProduct(id: any): Observable<Iproducts> {
    // return data.find(item => item.id == id)
    return this.http.get<Iproducts>(`${this.URL_API}/${id}`);
  }
  getProductList(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(`${this.URL_API}`);
  }
  removeProduct(id: any): Observable<Iproducts> {
    return this.http.delete<Iproducts>(`${this.URL_API}/${id}`);
  }
  addProduct(product: Iproducts): Observable<Iproducts> {
    return this.http.post<Iproducts>(`${this.URL_API}`, product);
  }
  updateProduct(product: Iproducts){
    return this.http.put<Iproducts>(`${this.URL_API}/${product.id}`, product)
  }
}
