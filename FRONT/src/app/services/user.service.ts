import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/Users/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url = environment.serverUrl + 'users/';
  public token: string;

  constructor(private _httpClient: HttpClient) {}

  getAll(): any {
    return this._httpClient.get(this._url);
  }

  get(id: string): any {
    return this._httpClient.get(this._url + id);
  }

  update(user: any){
    return this._httpClient.put(this._url + user.id , user);
  }

}
