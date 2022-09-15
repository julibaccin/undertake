import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddupdateComponent } from './components/addupdate/addupdate.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import { AddfromexcelComponent } from './components/addfromexcel/addfromexcel.component';


@NgModule({
  declarations: [
    ClientsComponent,
    AddupdateComponent,
    SendTextComponent,
    AddfromexcelComponent,
    
  ],
  imports: [SharedModule, CommonModule, ClientsRoutingModule],
  exports: [ClientsRoutingModule],
})
export class ClientsModule {}
