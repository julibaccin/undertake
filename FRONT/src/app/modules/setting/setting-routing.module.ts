import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { PaymentComponent } from './payment/payment.component';
import { EmailComponent } from './email/email.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: '', component: SettingComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'email', component: EmailComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
