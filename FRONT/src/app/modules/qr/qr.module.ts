import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrComponent } from './qr.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [QrComponent],
  imports: [
    CommonModule,
    QrRoutingModule,
    SharedModule
  ]
})
export class QrModule { }
