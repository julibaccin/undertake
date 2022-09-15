import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct, ISite } from '../interfaces/Sites/ISite';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(
    private _toastr: ToastrService
    ) { }

  // async getSite(url: string){
  //   try {
  //     return this._fbFirestore.collection<ISite>('sites').doc(url).get()
  //   } catch (error) {
  //     console.log("SitesService:getSite", error)
  //     return null;
  //   }
  // }

  // async getProductsSite(siteId){
  //   try {
  //     return this._fbFirestore.collection<ISite>('sites').doc(siteId).collection<IProduct>('products').get();
  //   } catch (error) {
  //     console.log("SitesService:getSite", error)
  //     return null;
  //   }
  // }

  // async getUserSites(){

  // }

  // async changeActive(iddoc, value: boolean){
  //   try {
  //     await this._fbFirestore.collection('sites').doc(iddoc).update({
  //       active: value
  //     })
  //     this._toastr.success('Estado cambiado')
  //   } catch (error) {
  //     this._toastr.error(error.message)
  //     console.log("SitesService:changeActive", error)
  //   }
  // }

  // async addSite(dataSite: ISite): Promise<boolean>{
  //   try {
  //     const resp = await this._fbFirestore.collection('sites').doc(dataSite.urlSite).get().toPromise()
  //       if(resp.exists) { 
  //         this._toastr.warning('La url ya está en uso')
  //         return false; 
  //       }
  //       await this._fbFirestore.collection('sites').doc(dataSite.urlSite).set(dataSite)
  //       this._toastr.success('Página creada exitosamente')
  //       return true;
  //   } catch (error) {
  //     console.log("SitesService:addSiteEcommerce", error)
  //     this._toastr.error(error.message)
  //     return false;
  //   }
  // }

  // async updateSiteEcommerce(dataSite: ISite): Promise<boolean>{
  //   try {
  //   const resp = await this._fbFirestore.collection('sites').doc(dataSite.urlSite).update( {dataSite} )
  //   this._toastr.success('Pagina actualizada con exito')
  //   return true

  //   } catch (error) {
  //     console.log("SitesService:updateSiteEcommerce", error)
  //     this._toastr.error(error.message)
  //     return false
  //   }
  // }


}
