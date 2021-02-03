import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/categories";

  getCategories():Observable<Category[]>{
    return this.http
    .get<Category[]>(this.path).pipe( 
        tap(data =>console.log(JSON.stringify(data))), 
        catchError(this.handleError));   
    
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
