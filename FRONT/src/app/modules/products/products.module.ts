import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddupdateComponent } from './components/addupdate/addupdate.component';


@NgModule({
  declarations: [ProductsComponent, AddupdateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
