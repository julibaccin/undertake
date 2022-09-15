import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface ISettings {
  settingEmail?: string,
  settingPassword?: string,
  tokenMercadoPago?: string
}

@Injectable({
  providedIn: 'root',
})

export class SettingService {
  private url = environment.serverUrl + 'auth/settings';

  constructor(private _httpClient: HttpClient) {}

  configureSettings(settings: ISettings) {
    return this._httpClient.put(
      this.url,
      settings
    );
  }

  getSettingsForUser(){
    return this._httpClient.get(this.url);
  }

}
