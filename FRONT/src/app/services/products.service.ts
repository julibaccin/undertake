import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/Sites/ISite';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
  ) {}

  // async addProduct(newProduct: IProduct, siteId) {
  //   return await this._fireStore.collection('sites').doc(siteId).collection('products').add(newProduct);
  // }

  // async getAllProductBySiteId(siteId: string) {
  //   return await this._fireStore.collection('sites').doc(siteId).collection('products').get();
  // }

  // async updateProduct(product: IProduct, siteId) {
  //   return await this._fireStore.collection('products').doc(siteId).collection('products').doc('asd').update(product);
  // }

}
