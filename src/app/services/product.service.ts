import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from "rxjs/operators";


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/products";


  getProducts(categoryId:number):Observable<Product[]>{

    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }

    return this.http
    .get<Product[]>(newPath)
        .pipe(  //bu pipe ile subscribe yapmadan önce loglama ve hata yakalama gibi operasyonlar yapabiliyoruz. tap() ve catchError() rxjs kütüphanesinin metodları.
        tap(data =>console.log(JSON.stringify(data))), //.get metodu burada bize bir Observable döner.  
        catchError(this.handleError));   
  }

  addProduct(product:Product):Observable<Product>{

    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Token'
      })
    }
    
    return this.http.post<Product>(this.path,product, httpOptions)
         .pipe(     
          tap(data =>console.log(JSON.stringify(data))),   
          catchError(this.handleError)
    );  

  }
  
  private handleError(err: HttpErrorResponse){

    let errorMessage = ''

    if(err.error instanceof ErrorEvent){
      errorMessage = "An error occured" + err.error.message
    }else{
      errorMessage = "A systematical error occured"
    }
    return throwError(errorMessage) ;
  }

}
