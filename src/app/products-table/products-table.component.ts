import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({ //so é um component por conta deste decorator @Component;
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit{ //Classe TypeScript;
  products : Product[] = [];
    constructor(private service: ProductService){
    };
  ngOnInit():void {
    this.loadProducts();
  }
  loadProducts(){
    this.service.getProducts().subscribe({
      next: data => this.products = data
    }
  );
  }
  delete(product: Product){
    this.service.delete(product).subscribe({
      next: () => this.loadProducts()
    });
  }
}
