import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'price', 'more'];
  dataSource = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.productsService.getAllProductBySiteId('divergentesbatik').then(i=>{
    //   i.subscribe(e=>{
    //     e.docs.forEach(o=>{
    //       this.dataSource.push(o.data())
    //     })
    //     this.dataSource = [...this.dataSource];
    //   })
    // })
      
  }

}
