import { Component } from '@angular/core';
import { Product } from '../product';

@Component({ //so é um component por conta deste decorator @Component;
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent { //Classe TypeScript;
  products : Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      price: 1500,
      category: 'Eletrônicos'
    },
    {
      id: 2,
      name: 'Tênis',
      price: 200,
      category: 'Esporte'
    },
    {
      id: 3,
      name: 'Livro',
      price: 50,
      category: 'Livros'
    }
  ];
}
