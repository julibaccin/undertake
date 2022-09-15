import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-addfromexcel',
  templateUrl: './addfromexcel.component.html',
  styleUrls: ['./addfromexcel.component.css']
})
export class AddfromexcelComponent implements OnInit {

  constructor(
    private _clientService: ClientsService, 
    private _snackBar: MatSnackBar,   
  ) { }

  ngOnInit(): void {
  }

  file: File;
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
          this._snackBar.open('ERROr', '', { duration: 2000 });
        } else {
          this._snackBar.open('Correcto', '', { duration: 2000 });
        }
      });
    };
  }


}
