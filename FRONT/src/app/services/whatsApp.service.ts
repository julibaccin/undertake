import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {

  private url = environment.serverUrl + "whatsApp/";
  
  constructor(private httpClient: HttpClient) { }

  sendWhatsApp(whatsapp){
    return this.httpClient.post(this.url, whatsapp)
  }

}
