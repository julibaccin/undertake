import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites.component';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [SitesComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    MatStepperModule,
    SharedModule
  ],
  providers: [
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SitesModule { }
