import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  /*
  private _url = environment.serverUrl + "auth/";
  public token: string;
  
  constructor(
    private _httpClient: HttpClient
    ) {}

  login(user: IUser): Observable<{data: {token: string} , error: string}> {
    return this._httpClient.post<{data: {token: string}, error: string}>(this._url + 'signin', user);
  }

  register(user: IUser) : Observable<{data: {token: string},error: string}> {
    return this._httpClient.post<{data: {token: string}, error: string}>(this._url + 'register', user)
  }
 */
}
