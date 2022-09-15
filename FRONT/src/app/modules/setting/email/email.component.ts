import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SettingService } from 'src/app/services/setting.service';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emailGroup: FormGroup;
  hide = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _settingsService: SettingService,
    private _snackService: SnackService,
  ) { 
    this.emailGroup = this._formBuilder.group({
      settingsEmail: new FormControl('', [Validators.email, Validators.required]),
      settingsPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._settingsService.getSettingsForUser().subscribe(i=>{
      this.emailGroup.setValue({
        settingsEmail: i['data'].settingEmail || "",
        settingsPassword: i['data'].settingPassword || "",
      });
    })
  }

  saveEmailSetting() {
    if (this.emailGroup.invalid) {
      this._snackService.presentError('Datos Invalidos');
      return;
    }

    this._settingsService
      .configureSettings({
        settingPassword: this.emailGroup.value.settingsPassword,
        settingEmail: this.emailGroup.value.settingsEmail,
      })
      .subscribe((i) => {
        this._snackService.presentSuccess('Datos Actualizados con Éxito');
      });
  }





}
