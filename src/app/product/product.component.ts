import { Component, OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
    new Product()
   }

  ngOnInit(): void {
  }

  title = "Product List"

  products : Product[] = [
   // {id:1, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook"},
  // {id:2, name : "Mause", price : 2500, categoryId :1, description : "Asus ZenBook"}
  ]
}


