import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IClient } from '../interfaces/Clients/IClient';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private url = environment.serverUrl + 'clients/';
  constructor(
    private httpClient: HttpClient,
  ) {}

  getOne(id: string) {
    return this.httpClient.get(this.url + id);
  }

  getAll() {
    return this.httpClient.get<{data: any, error: string}>(this.url);
  }

  create(client: any) {
    return this.httpClient.post(this.url, {
      ...client,
    });
  }

  update(id: string, client: IClient) {
    return this.httpClient.put(this.url + id, {
      ...client,
    });
  }

  delete(id: string) {
    return this.httpClient.delete(this.url + id);
  }

  createForExcel(data: any) {
    return this.httpClient.post(this.url + 'createForExcel', {
      data,
    });
  }
}
