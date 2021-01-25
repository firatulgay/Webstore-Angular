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
  filterText = ""

  products : Product[] = [
    {id:1, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook", imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:2, name : "Mause", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:3, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:4, name : "Speaker", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:5, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:6, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:7, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"},
   {id:8, name : "Laptop", price : 2500, categoryId :1, description : "Asus ZenBook" , imageUrl : "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"}

  ]
}


