import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MyProduct} from 'src/app/product.model';
import {HttpProductService} from 'src/app/services/http-product.service';

@Component({
  selector: 'app-spisok-pokupok',
  templateUrl: './spisok-pokupok.component.html',
  styleUrls: ['./spisok-pokupok.component.css']
})
export class SpisokPokupokComponent implements OnInit {
title = 'Список';
  @Input() products: MyProduct[] = [];
  @Output() changeStatus = new EventEmitter<number>();
  httpProductService: any;
  constructor(public http: HttpProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  async onChangeStatusProduct1(id: any) {
    const product = this.products.find(product => id === product.id);
    product!.status = false;
    try {
      await this.http.changeStatusProduct(product!);
    } catch (error) {
      console.log(error);
    } finally {
      this.getProducts();
    };
  }
    async onChangeStatusProduct2(id: any) {
      const product = this.products.find(product => id === product.id);
      product!.status = true;
      try {
        await this.http.changeStatusProduct(product!);
      } catch (error) {
        console.log(error);
      } finally {
        this.getProducts();
      };
  }
async getProducts() {
  try {
    this.products = await this.http.getProduct();
  } catch (error) {
    console.log(error)
  }
}


}
