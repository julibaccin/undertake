import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponent } from './payment/payment.component';
import { EmailComponent } from './email/email.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [SettingComponent, PaymentComponent, EmailComponent, FaqComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule
  ]
})
export class SettingModule { }
