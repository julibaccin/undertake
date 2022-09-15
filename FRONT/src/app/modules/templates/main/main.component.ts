import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SitesService } from 'src/app/services/sites.service';
import { ISite } from 'src/app/interfaces/Sites/ISite';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dataSite: ISite;
  loading = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _sitesService: SitesService,
  ) { }

  async ngOnInit() {

    // (await this._sitesService.getSite(this._activatedRoute.snapshot.params.id)).subscribe(async (site)=>{

      
    //   this.dataSite = site.data();     
    //   if(!this.dataSite) this._router.navigate([this._activatedRoute.snapshot.params.id,'notfound']);

    //   (await this._sitesService.getProductsSite(this._activatedRoute.snapshot.params.id)).subscribe(i=>{
        
    //     let normalProducts = [];
    //     let mainProducts = [];

    //     i.docs.forEach(product=>{
    //       product.data().main ? mainProducts.push(product.data()) : normalProducts.push(product.data());
    //     })
         
    //     let products = [ normalProducts, mainProducts ]

    //     this.dataSite = {...this.dataSite, products}
    //     this.loading = false;

    //   });

    // });
    
    

  
      
    
 
  }
}
