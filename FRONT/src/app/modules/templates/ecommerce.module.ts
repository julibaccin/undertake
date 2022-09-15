import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

//COMPONENTS
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

//MAIN
import { MainComponent } from './main/main.component';

//TEMPLATE
import { TemplateLandingComponent } from './components/template-landing/template-landing.component';
import { TemplateEcommerceComponent } from './components/template-ecommerce/template-ecommerce.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    //COMPONENTS
    NotfoundComponent,
    DetailproductComponent,
    CartComponent,
    TemplateLandingComponent,
    //MAIN
    MainComponent,
    //TEMPLATE
    TemplateLandingComponent,
    TemplateEcommerceComponent,
    LoadingComponent
  ],
  imports: [CommonModule, EcommerceRoutingModule, SharedModule],
})
export class EcommerceModule {}
