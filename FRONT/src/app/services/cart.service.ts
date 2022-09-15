import { IProduct } from './../interfaces/Sites/ISite';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
    private cart: Array<IProduct> = []

    constructor() { }

    addProduct(data){
        const i = this.cart.indexOf( data );
        i == -1 && this.cart.push( data );
    }

    removeProduct(data){
        const i = this.cart.indexOf( data );
        i !== -1 && this.cart.splice( i, 1 );
    }

    getCart(){
        return this.cart;
    }

}
