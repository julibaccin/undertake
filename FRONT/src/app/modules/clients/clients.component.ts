import { IClient } from './../../interfaces/Clients/IClient';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddupdateComponent } from './components/addupdate/addupdate.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import { SelectionModel } from '@angular/cdk/collections';
import { SnackService } from 'src/app/services/snack.service';
import { AddfromexcelComponent } from './components/addfromexcel/addfromexcel.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit,AfterViewInit {

  @ViewChild('message') message: ElementRef;
  @ViewChildren('check') checks: QueryList<MatCheckbox>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) clientTable: MatTable<IClient>;

  filter: string = "";
  dataSource = new MatTableDataSource<IClient>([]);
  selection = new SelectionModel<IClient>(true, []);
  displayedColumns: string[] = [
    'select',
    'firstName',
    'lastName',
    'email',
    'phone',
    'address',
    'sendSMS',
  ];

  constructor(
    private clientService: ClientsService,
    public dialog: MatDialog,
    private _snackService: SnackService
  ) {}

  ngOnInit() {
    
    this.clientService.getAll().subscribe((clients) => {
      console.log("CLIENTES", clients.data);
      this.dataSource.data = clients.data;
    });
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialogAddFromExcel() {
    const dialogRef = this.dialog.open(AddfromexcelComponent)
  }
  openDialogCreateUpdateClient(client?: IClient | null): void {
    const dialogRef = this.dialog.open(AddupdateComponent, {
      data: { client },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openDialogSendText(): void {

    let selectedItems = this.selection.selected;

    if (selectedItems.length == 0){
      this._snackService.presentInfo("Debe seleccionar al menos 1 elemento");
      return;
    }

    const dialogRef = this.dialog.open(SendTextComponent, {
      width: '500px',
      data: {items: selectedItems}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
    
  }

  delete(id: string): void {
    this.clientService.delete(id).subscribe((resultado) => {
      this._snackService.presentSuccess("Cliente Eliminado con Exito");
      this.ngOnInit();
    });
  }

  viewMore(id: string): void {
    this.clientService.getOne(id).subscribe((client) => {
      this.openDialogCreateUpdateClient(client['data']);
    });
  }

  refresh(): void {
    this.selection.clear();
    this.ngOnInit();
  }


  //Table Filter--------------------------------
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Table Check---------------------------------
  isAllSelected() {
    const numSelected = this.selection.selected?.length;
    const numRows = this.dataSource.data?.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IClient): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${2 + 1}`;
  }



}
