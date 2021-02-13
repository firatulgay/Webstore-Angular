import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PRIMARY_OUTLET } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-reactive-form',
  templateUrl: './product-add-reactive-form.component.html',
  styleUrls: ['./product-add-reactive-form.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductAddReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, // FormBuilder formla ilgili validasyon yapacağımız yer. Angulardan geliyor.
    private categoryService: CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService) { }

  productAddForm: FormGroup; // FormGroup formu yönetebileceğimiz form.
  product: Product = new Product;
  categories: Category[];

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]

    })
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategories();
  }

  addProduct() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);  // Burada ön yüzde oluşturulan form product a bind ediliyor. 
    }

    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name + " saved successfully!")
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }




}
