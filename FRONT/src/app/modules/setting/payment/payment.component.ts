import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {

  constructor(private renderer2: Renderer2,
  @Inject(DOCUMENT) private _document,
  private _snackServicio: SnackService) {}

  ngOnInit(): void {
   const s = this.renderer2.createElement('script');
   s.type = 'text/javascript';
   s.src = 'https://sdk.mercadopago.com/js/v2';
   s.text = ``;
   this.renderer2.appendChild(this._document.body,s)

  let mp = new (<any>window)['MercadoPago']('TEST-72622931-dfca-4f26-8e8c-31b7be007517', {
    locale: 'es-AR',
  })

  mp.checkout({
    preference: {
      id: '443135971-10ffa0b1-00c9-4771-b943-c6367271f5ae',
    },
    render: {
      container: '.cho-container', // Indica dónde se mostrará el botón de pago
      label: 'Pagar', // Cambia el texto del botón de pago (opcional)
    },
  });

  }

  mercadoPago(){
    this._snackServicio.presentInfo("Actualmente estamos trabajando en la integración con Mercado Pago")
  }


}
