import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from "@angular/common/http";
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  //Burada AlertifyService  için  Injection ı constructerda yapıyoruz. 
  constructor(
    private alertifyService: AlertifyService,
    private   productService: ProductService ) {}

  title = "Product List"
  filterText = ""
  products: Product[];

  // onInit metodu bu component ilk çağrıldığı anda çalışır. 
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
     this.productService.getProducts().subscribe(data =>
      this.products=data)
  }


  addToCart(product: Product) {
    this.alertifyService.success(product.name + " Added")
  }

}



