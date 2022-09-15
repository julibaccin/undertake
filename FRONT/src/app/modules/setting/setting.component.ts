import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})

export class SettingComponent implements OnInit {

  dataGroup: FormGroup;


  constructor( 
    private _formBuilder: FormBuilder

     ){
   /*  this.dataGroup = this._formBuilder.group({
      setName: new FormControl(''),
      setLastname: new FormControl(''),
      setEmpresa: new FormControl(''),
      setCountry: new FormControl(''),
      setCity: new FormControl(''),
      setCel: new FormControl(''),
      setMail: new FormControl('', [Validators.email]),
    }) */
  }

  ngOnInit(): void {
    
  }


}
