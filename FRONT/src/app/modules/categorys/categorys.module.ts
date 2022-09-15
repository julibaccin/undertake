import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorysRoutingModule } from './categorys-routing.module';
import { CategorysComponent } from './categorys.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddupdateComponent } from './components/addupdate/addupdate.component';


@NgModule({
  declarations: [CategorysComponent, AddupdateComponent],
  imports: [
    CommonModule,
    CategorysRoutingModule,
    SharedModule
  ]
})
export class CategorysModule { }
