import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClient } from 'src/app/interfaces/Clients/IClient';
import { EmailService } from 'src/app/services/email.service';
import { SnackService } from 'src/app/services/snack.service';
import { WhatsAppService } from 'src/app/services/whatsApp.service';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css'],
})

export class SendTextComponent implements OnInit {
  @Input('items') items: Array<IClient>;
  @ViewChild('message') message: ElementRef;
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('imagenAca') imagenAca: ElementRef;

  showenviar: boolean = false;
  showSubject = false;
  mode: string = '';
  showSpinner = false;
  segundosFaltan = 15;
  intervalo;
  chips = ['firstName', 'address', 'lastName', 'birthDate', 'email', 'phone'];
  constructor(
    private _emailService: EmailService,
    private _snackService: SnackService,
    private _whatsAppService: WhatsAppService,
    private _matDialog: MatDialogRef<SendTextComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.items = this.data.items;
  }

  check(mode: string) {
    this.mode = mode;
    if (mode == 'whatsapp') {
      var contwtp = document.getElementById('colum-wtp');
      var contdata = document.getElementById('colum-data');
      contdata.className = 'col-data';
      contwtp.className = 'col-whtp-clk';
    } else {
      this.showSubject = true;
      var contdata = document.getElementById('colum-data');
      var contwhap = document.getElementById('colum-wtp');
      contwhap.className = 'col-whtp';
      contdata.className = 'col-data-clk';
    }
  }

  addChip(chip: string, mode: string) {

    //PRUEBA DE AVISO OJO CON EL RENDIMIENTO
    let cantItemsSinChip = 0
    this.items.forEach(item=>{
      if(!item[chip]){
        cantItemsSinChip = cantItemsSinChip + 1;
      }
    })
    if(cantItemsSinChip>0){
      this._snackService.presentInfo("Hay " + cantItemsSinChip + " clientes, sin valor en: " + chip);
    }
    //

    if (mode == 'message') {
      this.message.nativeElement.value =
        this.message.nativeElement.value + ' {' + chip + '} ';
    } else {
      this.subject.nativeElement.value =
        this.subject.nativeElement.value + ' {' + chip + '} ';
    }
  }

  send() {
    if (this.mode == 'whatsapp') {
      this.sendWhatsApp();
    } else {
      this.sendMail();
    }
  }

  sendWhatsApp() {
    this.showSpinner = true;

    //SACAR ESTO RANCIO
    setTimeout(() => {
      this.showSpinner = false;
    }, 15000);

    let data: Array<{}> = [];

    this.items.forEach((item) => {
      const textEnviar = this.getText(this.message.nativeElement.value, item);
      data.push({ phone: '549' + item.phone, message: textEnviar });
    });

    this._whatsAppService.sendWhatsApp({ data }).subscribe((i) => {
      this.showSpinner = false;

      this.imagenAca.nativeElement.innerHTML = i;

      this.intervalo = setInterval(() => {
        if (this.segundosFaltan == 0) {
          clearInterval(this.intervalo);
          this.segundosFaltan = 15;
          this.imagenAca.nativeElement.innerHTML = '';
          return;
        }
        this.segundosFaltan--;
      }, 1000);
    });
  }

  sendMail() {
    this.items.forEach((item) => {
      const textEnviar = this.getText(this.message.nativeElement.value, item);
      const subjectEnviar = this.getText(
        this.subject.nativeElement.value,
        item
      );

      this._emailService
        .sendEmail({
          to: item.email,
          subject: subjectEnviar,
          text: textEnviar,
        })
        .subscribe((i) => {
          console.log(item.firstName,i);
          if (i['error']) {
            this._snackService.presentError(i['error'].response);
          } else {
            this._snackService.presentSuccess('Se envio Correctamente');
          }
        });
    });

    this._matDialog.close();
  }

  getText(message: string, item: IClient): string {
    let textEnviar = message;

    while (true) {
      let primerIndex = textEnviar.indexOf('{');
      let segundoIndex = textEnviar.indexOf('}');
      if (primerIndex == -1 || segundoIndex == -1) {
        return textEnviar;
      }
      let variable = textEnviar.substr(
        primerIndex + 1,
        segundoIndex - primerIndex - 1
      );

      let remplazo = item[variable] ? item[variable] : '';

      textEnviar = textEnviar.replace('{' + variable + '}', remplazo);
    }
  }
}
