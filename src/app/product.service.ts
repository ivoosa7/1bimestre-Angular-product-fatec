import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  delete(product:Product): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/products/' + product.id);
  }
}
