import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Sites/ISite';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent implements OnInit {

  form: FormGroup;
  //IMAGES
  mainFile: File = null;
  urlMain;

  constructor(
    private _formBuilder: FormBuilder,
    private _productsService: ProductsService,
    ) { }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      name: ['', [ Validators.required ] ],
      description: ['', [ Validators.required ] ],
      category: ['', [ Validators.required ] ],
      price: ['', [ Validators.required ] ],
      productCategory: ['', [ Validators.required ] ],
      main: [false, [ ] ],
    })

  }

  handleFileInput(e, identificador) {
    var reader = new FileReader();
    reader.onload = (e) => {
        this.urlMain = e.target.result
    };
    reader.onerror = (e: any) => {
      console.log('File could not be read: ' + e.target.error.code);
    };
    identificador == 1
      this.mainFile = e.target.files[0]
    reader.readAsDataURL(this.mainFile);
  }

  async uploadImage(type: string, urlSite: string, file: File) {
    const imageName = type + urlSite;
    //let referencia = (await this._fireStorage.upload(imageName, file)).ref;
    //return await referencia.getDownloadURL();
  }

  async createProduct(){

    let {name, description, price, main, productCategory} = this.form.value;
    let imgUrl = await this.uploadImage('product', name , this.mainFile);
    
    // let newProduct: IProduct = {
    //   name,
    //   description,
    //   price,
    //   main,
    //   //imgUrl,
    //   productCategory,
    //   active: true,
    // }

    //await this._productsService.addProduct(newProduct, 'divergentesbatik'); 

    alert("Producto Creado con Exito")
    this.form.reset();
    this.mainFile = null;
    this.urlMain = "";
    
  }

}
