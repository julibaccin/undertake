import { CartService } from './../../../../services/cart.service';
import { DetailproductComponent } from './../detailproduct/detailproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart;
  totalPrice = 0;
  totalQuantity= 0;
  
  constructor(
    public dialog: MatDialog,
    public cartService: CartService
    ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.cart.map(i=>{
      this.totalQuantity += i.quantity;
      this.totalPrice += i.product.price * i.quantity ;
    })
  }

  showDetail(product){
    this.dialog.open(DetailproductComponent, {
      data: product,
      maxHeight: '90vh',
      width: '90%'
    });
  }

}
