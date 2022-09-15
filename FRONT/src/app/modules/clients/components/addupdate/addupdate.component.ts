import { Component, Inject, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClient } from 'src/app/interfaces/Clients/IClient';

//Read Excel
import * as XLSX from 'xlsx';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css'],
})
export class AddupdateComponent implements OnInit {
  
  public formGroup: FormGroup;
  public title: string;
  file: File;

  constructor(
    private _clientService: ClientsService,
    private _formBuilder: FormBuilder,
    public _dialogRef: MatDialogRef<AddupdateComponent>,
    private _snackService: SnackService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      enterprise: [''],
      address: [''],
      city: [''],
      birthDate: [''],
      activity: [''],
      civilStatus: [1],
      gender: [''],
      country: [''],
      province: [''],
      phone: [''],
      email: ['', Validators.email],
      note: [''],
      facebookLink: [''],
      instagramLink: [''],
      haveWhatsapp: [false],
      haveTelegram: [false],
      otherLink: [''],
      lastPurchase: [''],
      lastTalk: [''],
      id: [''],
      idUser: [''],
      active: true,
    });

    let client: IClient = this.data.client;
    if (client) {
      this.formGroup.setValue(client);
      this.title = 'Actualizar';
    } else {
      this.title = 'Crear';
    }
  }
  createUpdateClient(e: Event): void {
    
    e.preventDefault();

    if (this.formGroup.invalid) {
      this._snackService.presentError("Datos Invalidos")
      return;
    }

    if (this.title == 'Crear') {
      let newClient = { ...this.formGroup.value };
      delete newClient.id;
      this._clientService.create(newClient).subscribe((i) => {
        if (i['error']) {
          this._snackService.presentError(i['error']);
        } else {
          this._snackService.presentSuccess('Cliente Creado con Exito');
          this.formGroup.reset();
        }
      });
    } else {
      this._clientService
        .update(this.data.client.id, this.formGroup.value)
        .subscribe((i) => {
          if (i['error']) {
            this._snackService.presentError(i['error']);
          } else {
            this._snackService.presentSuccess('Cliente Actualizado con Exito');
          }
        });
    }
  }
  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>event.target;

    if (target.files.length !== 1) {
      return;
    }

    this.file = target.files[0];
  }
  createClientsWithExcel() {
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(this.file);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      this._clientService.createForExcel(data).subscribe((i) => {
        if (i['error']) {
          this._snackService.presentError('Error al cargar Excel');
        } else {
          this._snackService.presentSuccess('Se cargó correctamente el mail');
        }
      });
    };
  }

}
