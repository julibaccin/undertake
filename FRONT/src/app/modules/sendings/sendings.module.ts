import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendingsComponent } from './sendings.component';
import { SendingsRoutingModule } from './sendings-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SendingsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SendingsRoutingModule
  ]
})
export class SendingsModule { }
