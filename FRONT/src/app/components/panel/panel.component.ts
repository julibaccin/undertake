import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/Users/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {

  messagePayment: string;
  opened: boolean = false;
  vigencia: Date;
  
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _paymentService: PaymentService
    ) {}

  ngOnInit(){
    this.hasPayment()
  }

  async logout() {
    this._authService.token = '';
    this._router.navigateByUrl('login');
  }

  hasPayment(){
    
    this._paymentService.hasPayment().subscribe(i=>{
      if (i['error']){
        this.messagePayment = "Este usuario debe regularizar su situacion de pago."
        return;
      }
      this.vigencia = new Date(i['data']);
      console.log(this.vigencia);
      this.messagePayment = "Este usuario tiene vigencia hasta  ";
      //+ i['data']
    })
  }

}
