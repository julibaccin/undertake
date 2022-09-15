import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url = environment.serverUrl + 'payment/';

  constructor(private _httpClient: HttpClient) { }

  hasPayment() : Observable<any> {
    return this._httpClient.get(this.url + '/hasPayment');
  }

}
