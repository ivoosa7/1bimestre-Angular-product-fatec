import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{

  formGroupProduct: FormGroup; //Este formGroupProduct é um atributo que guarda o valor da classe FormGroup;

  constructor(private router/*este router antes dos : é um parâmetro que vai guardar a classe Router*/: Router,
              private activeRouter: ActivatedRoute,
              private service: ProductService,
              private formBuilder: FormBuilder
            )
              {

    this.formGroupProduct = formBuilder.group({
      id       : [''],
      name     : [''],
      price    : [''],
      category : ['']
    });
  }

  ngOnInit() {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"));
    this.loadProduct(id);
  }

  loadProduct(id:number){
    this.service.getProductById(id).subscribe({
      next: data => this.formGroupProduct.setValue(data)
    });
  }

  update(){
    this.service.update(this.formGroupProduct.value).subscribe({
      next: () => this.router.navigate(['products'])
    })
  }
}
