import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MainComponent } from './components/main/main.component';
import { SpisokPokupokComponent } from './components/spisok-pokupok/spisok-pokupok.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'add_product',
    component: AddProductComponent
  },
  {
    path: 'edit_product',
    component:EditProductComponent
  },
  {
    path: 'spisok_pokupok',
    component:SpisokPokupokComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
