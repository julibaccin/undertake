import { ISite, IProduct } from './../../../../interfaces/Sites/ISite';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DetailproductComponent } from '../detailproduct/detailproduct.component';
import { CartComponent } from '../cart/cart.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-ecommerce',
  templateUrl: './template-ecommerce.component.html',
  styleUrls: ['./template-ecommerce.component.css']
})
export class TemplateEcommerceComponent implements OnInit {

  @Input('data') dataSite: ISite;

  menuItems = 
  [
   'nosotros',
   'contacto',
   'categorias',
   'destacados'
  ]
  
  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    console.log(this.dataSite);
  }

  scrollToElement(idElement): void {
    document.getElementById(idElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  showCart(){
    this.dialog.open(CartComponent, {
      data: {
        
      },
      maxHeight: '90vh',
      width: '90%'
    });
  }

  showDetail(product: IProduct){
    this.dialog.open(DetailproductComponent, {
      data: product,
      maxHeight: '90vh',
      width: '90%'
    });
  }

}
