import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendingsComponent } from './sendings.component';

const routes: Routes = [
  {path: '', component: SendingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendingsRoutingModule { }
