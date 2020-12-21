import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyProduct } from 'src/app/product.model';
import { HttpProductService } from 'src/app/services/http-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: MyProduct[] = [];

  constructor(private http: HttpProductService,) { }
  myProductForm: FormGroup;
  @Output() addProduct = new EventEmitter<MyProduct>();
  title: string;
  count: number;

  ngOnInit(): void {
    this.myProductForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required]),
    })
  }
  async onAddProduct() {
    try {
      this.products = await this.http.getProduct();
      const id = this.products.length > 0 ? this.products [this.products.length - 1].id + 
      1 : 0;
     /* let id = 0;
      if ((this.products!.length > 0) && this.products![this.products!.length - 1] !=
      undefined) {
        id = this.products![this.products!.length - 1]!.id + 1;
      }*/

      this.products.push({id: id, title: this.title, count: this.count});
     // console.log(this.products[this.products.length - 1])
     // console.log(this.products);
      this.http.postProduct(this.products[this.products.length - 1]);

    } catch (error) {
      console.log(error);
    } finally {
      this.http.getProduct();
    }
  }

}
