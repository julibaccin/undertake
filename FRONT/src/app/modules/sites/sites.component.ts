import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISite, IProduct } from 'src/app/interfaces/Sites/ISite';
import { SitesService } from 'src/app/services/sites.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
})
export class SitesComponent implements OnInit {
  dataSite: FormGroup;
  flagCreate = false;
  products: Array<IProduct>;

  displayedColumns: string[] = ['title', 'created_at', 'active'];
  dataSource = [];

  //IMAGES
  logoFile: File = null;
  mainFile: File = null;
  urlLogo;
  urlMain;

  constructor(
    private _formBuilder: FormBuilder,
    private _siteService: SitesService,
    private _authService: AuthService
  ) {
    this.dataSite = this._formBuilder.group({
      title: ['Titulo Web', Validators.required],
      description: ['Descripcion Web', Validators.required],
      phone: ['3462302916', Validators.required],
      type: ['1', Validators.required],
      urlSite: ['', Validators.required],
      slogan: ['', Validators.required],
      //Others
      category: ['Page Category'],
      //Contact
      city: ['Venado Tuerto', Validators.required],
      country: ['Argentina', Validators.required],
      province: ['Santa Fe', Validators.required],
      street: ['Laprida', Validators.required],
      department: ['P.A', Validators.required],
      number: ['255', Validators.required],
      facebookLink: ['www.facebook.com'],
      instagramLink: ['www.instagram.com'],
      whatsapp: ['3462302916'],
    });
  }
  @ViewChild(MatTable) table: MatTable<any>;
  async ngOnInit() {
    let x = [];
    //(await this._siteService.getUserSites()).forEach(i=>{
    //  x.push(i.data())
      
   // })
     this.dataSource = x
  }

  async createSite() {
    let form = this.dataSite;
    if (form.invalid && !this.mainFile && !this.logoFile) return;
    let v = form.value;
    try {
      let dataSite: any = {
        siteId: v.urlSite,
        //uid: (await this._authService.getCurrentUser()).uid,
        type: v.type ,
        title: v.title,
        description: v.description,
        // imgUrlMain: await this.uploadImage('main', v.urlSite, this.mainFile),
        // imgUrlLogo: await this.uploadImage('logo', v.urlSite, this.logoFile),
        urlSite: v.urlSite,
        category: v.category,
        contact: {
          city: v.city,
          country: v.country,
          province: v.province,
          street: v.street,
          department: v.department,
          number: v.number,
          phone: v.phone,
          facebookLink: v.facebookLink,
          instagramLink: v.instagramLink,
          whatsapp: v.whatsapp,
        },
        slogan: v.slogan,
        created_at: Date.now(),
        updated_at: Date.now(),
        active: true,
      };
      //const canCreate = await this._siteService.addSite(dataSite);

      // if (canCreate) {
      //   this.dataSite.reset();
      //   this.flagCreate = false;
      //   this.ngOnInit();
      // }
    } catch (error) {
      console.log(error);
    }
  }

  handleFileInput(e, identificador) {
    var reader = new FileReader();
    reader.onload = (e) => {
      identificador == 1
        ? (this.urlLogo = e.target.result)
        : (this.urlMain = e.target.result);
    };
    reader.onerror = (e: any) => {
      console.log('File could not be read: ' + e.target.error.code);
    };
    identificador == 1
      ? (this.logoFile = e.target.files[0])
      : (this.mainFile = e.target.files[0]);
    reader.readAsDataURL(identificador == 1 ? this.logoFile : this.mainFile);
  }

  // async uploadImage(type: string, urlSite: string, file: File) {
  //   const imageName = type + urlSite;
  //   let referencia = (await this._fireStorage.upload(imageName, file)).ref;
  //   return await referencia.getDownloadURL();
  // }

  // async changeActive(element){
  //   await this._siteService.changeActive(element.siteId, !element.active)
  //   this.ngOnInit();
  // }
  
}
