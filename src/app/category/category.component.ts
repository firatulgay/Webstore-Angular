import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { HttpClient } from "@angular/common/http";
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService ) { }

  title ="Categories"
  categories : Category[];

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(
      data => this.categories=data)
  }

}
