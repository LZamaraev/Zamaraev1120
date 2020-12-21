import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyProduct } from 'src/app/product.model';
import { HttpProductService } from 'src/app/services/http-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  myEditForm: FormGroup;
  formForDelete: FormGroup;
  id: number;
  idForDelete: number;
  count: number;
  title: string;
  status: boolean;

  constructor(private http: HttpProductService) { }
  products: MyProduct[] = [];

  ngOnInit(): void {
    this.myEditForm = new FormGroup ({
      title: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required]),
      status: new FormControl(null, []),
      id: new FormControl(null, [Validators.minLength(1)])
    })
    this.formForDelete = new FormGroup ({
      idForDelete: new FormControl(null, [Validators.required])
    })
  }
  async onEditProduct() {
    this.products = await this.http.getProduct();
    const product = this.products.find(product => this.id == product.id)
    if (product == undefined) {
      alert("Такого продукта нет в списке")
    }
    else {
      product.title = this.title;
      product.status = this.status;
      product.count = this.count;
      try {
        await this.http.editProduct(product);
      } catch (error) {
        console.log(error)
      } finally {
        this.http.getProduct();
      }
    }
  }
  async onDeleteProduct() {
    this.products = await this.http.getProduct();
    const product = this.products.find(product => this.idForDelete == product.id);
    //console.log(product);
    if (product == undefined) {
      alert("Такого продукта нет в списке")
    } 
    else {
      try {
        await this.http.deleteProduct(this.idForDelete);
      } catch (error) {
        console.log(error);
      } finally {
        this.http.getProduct();
      } 
    }
  }

}
