import { Injectable } from '@angular/core';
import {MyProduct} from '../product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {
  routeApi = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  getProduct(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }
  postProduct(product: MyProduct){
    return this.http.post(this.routeApi, product).toPromise();
  }
  editProduct(product: MyProduct) {
    return this.http.put(this.routeApi + `/${product.id}`, product).toPromise();
  }
  deleteProduct(id:number) {
    return this.http.delete(this.routeApi + `/${id}`).toPromise();
  }
  changeStatusProduct(product: MyProduct) {
    return this.http.put(this.routeApi + `/${product.id}`, product).toPromise();
  }
}
