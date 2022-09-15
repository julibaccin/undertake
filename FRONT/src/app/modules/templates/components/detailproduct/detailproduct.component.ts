import { CartService } from './../../../../services/cart.service';
import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/interfaces/Sites/ISite';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  cant = 1;

  imageSelected = 1;

  @ViewChild('imgGrande') imgGrande: ElementRef

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    private cartService: CartService
    ) { }

  ngOnInit(): void {}
  
  aumentar(){
    this.cant++
  }

  disminuir(){
    if (this.cant == 1) return;
    this.cant--
  }

  addCart(){
    this.cartService.addProduct({product: this.data, quantity: this.cant  });
    console.log(this.cartService.getCart());
  }


}
