import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = environment.serverUrl + "email/";
  
  constructor(private httpClient: HttpClient) { }

  sendEmail(email){
    return this.httpClient.post(this.url, email)
  }

}
