import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatNativeDateModule } from '@angular/material/core';
import {MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ReactiveFormsModule,
    NgxQRCodeModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDividerModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule,
    MatListModule
  ]
})

export class SharedModule { }
